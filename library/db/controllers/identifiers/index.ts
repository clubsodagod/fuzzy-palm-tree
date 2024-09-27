import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../db";
import { CategoryModel, SubcategoryModel } from "../../models";
import { CategoryDocumentType, ICategory } from "../../models/category";
import { ISubcategory, SubcategoryDocumentType } from "../../models/subcategory";
import { Photo, Video } from "@/library/types/common";
import mongoose,{ Model as MongooseModel, ObjectId, Document } from 'mongoose';
import { IUser } from "../../models/user";
import { Model } from 'mongoose';
import slugify from "slugify";
import { isCategory } from "@/utility/admin/identifiers";


export type IdentifierModelsType = typeof CategoryModel | typeof SubcategoryModel;
export type CreateIdentifierFunction = (Model:IdentifierModelsType,name:string, tagline:string, description:string, photo:Photo, video:Video,subcategories:string[], req:NextRequest, res:NextResponse) => Promise<NextResponse|ICategory|undefined|void|ISubcategory>

// Type Guard Function to narrow the type to Category
export function isCategoryPro(doc: any): doc is Document<unknown, {}, ICategory> & ICategory {
    return doc && (doc as ICategory).subcategories !== undefined;
}

export const createIdentifier:CreateIdentifierFunction = async(Model,name,tagline,description,photo,video,subcategories,req,res) => {

    // security? revalidate request method
    if(req.method==="POST"){
            
            try {
                // connect to database
                await connectToMongoDB();


                // create new identifier
                const identifier = new Model({name, description,tagline});
                identifier.photo.portrait = photo.portrait;
                identifier.photo.landscape = photo.landscape;
                identifier.video.landscape = video.portrait;
                identifier.video.portrait = video.landscape;

                // validate identifier type
                if (Model.modelName === "Category" && isCategoryPro(identifier)) {
                    // Restructure string array of subcategories
                    let checkedSubcategories = subcategories && subcategories.toString().split(",");
                    identifier.subcategories = checkedSubcategories as unknown as mongoose.Types.ObjectId[];
                }

                console.log(identifier);

                // validate new identifier
                if (!identifier) {
                    return NextResponse.json({message:`There was an error creating ${name.toUpperCase()} identifier. Please try again.`}, {status:500})
                } else {
                    // save new identifier
                    identifier.save();
                    return identifier
                }
            } catch (error) {
                return NextResponse.json({message:`There was an error creating ${name} identifier.`, error:error}, {status:500})
            }     
    } else {
        return NextResponse.json({message:"Your request is unauthorized"}, {status:500})
    }
}

// Define the type for the GetIdentifierFunction
export type GetIdentifierFunction = <T>(
    req: NextRequest,
    res: NextResponse,
    Model: MongooseModel<T>
) => Promise<NextResponse | undefined | T[]>;


// Function to get all identifiers and dynamically populate subdocuments
export const getAllIdentifiers = async <T extends Document>(req: NextRequest, res: NextResponse, Model: MongooseModel<T>) => {
    // Validate request method
    if (req.method === "GET") {
        try {
            // Connect to the database
            await connectToMongoDB();

            // Fetch identifiers with populated references
            const subs = new SubcategoryModel;
            {
                subs && subs
            }

            let identifiers
            if (Model.modelName === 'Category') {
                identifiers = await Model.find().populate('subcategories');
                console.log(identifiers, "category model $%%%%%%%%%%%%%%%%%%%%%%##############");
            } else {
                identifiers = await Model.find(); // No population for SubcategoryModel
                console.log(identifiers);
            }
            console.log(identifiers,);

            // Validate identifiers and return them if successful
            if (identifiers) {
                
                return identifiers
            } else {
                return NextResponse.json(
                    { message: "There was an error getting identifiers." }, 
                    { status: 500 }
                );
            }
        } catch (error) {
            return NextResponse.json(
                { message: "There was an error getting identifiers.", error: error },
                { status: 500 }
            );
        }
    } else {
        return NextResponse.json({ message: "Your request method is unauthorized." }, { status: 405 });
    }
}

export type UpdateIdentifierFunction = <T extends Document>(
    req: NextRequest,
    res: NextResponse,
    Model: MongooseModel<T>,
    identifier:  Partial<T> & { _id: ObjectId } 
) => Promise<NextResponse | null | T>;

// Define a generic update function with correct typings
export const updateIdentifier = async <T extends Document & { slug: string; name: string }>(
    req: NextRequest,
    res: NextResponse,
    Model: Model<T>,
    identifier: Partial<T> & { _id: ObjectId, name:string }
): Promise<T | NextResponse | null> => {
    if (req.method === "PUT") {

        // Type guard function to check if identifier is ICategory
        const isCategory = (identifier: ICategory | ISubcategory| Partial<ICategory|ISubcategory>): identifier is ICategory => {
            return 'subcategories' in identifier;
        }

        try {
        // Connect to the database (ensure you have your connection logic)
        await connectToMongoDB();
        console.log(identifier);

        // Find and update identifier by _id
        const updatedIdentifier = await Model.findByIdAndUpdate(
            identifier._id,
            identifier,
            { new: true }
        ).select(['_id', 'name', 'tagline', 'description', 'photo', 'video', 'slug', 'createdAt']);
        

        
        console.log(updatedIdentifier);
        
        if (updatedIdentifier) {
            updatedIdentifier.slug = slugify(identifier.name)
            return updatedIdentifier;
        } else {
            return NextResponse.json(
                { message: "There was an error updating the identifier. Please try again." },
                { status: 500 }
            );
        }
        } catch (error) {
            return NextResponse.json(
            { message: "There was an error updating the identifier.", error },
            { status: 500 }
            );
        }
    } else {
      return NextResponse.json(
        { message: "Your request is unauthorized." },
        { status: 405 } // Method Not Allowed
      );
    }
};

export const removeSubcategoriesOfCategory = async(req:NextRequest,res:NextResponse,categoryId:string,subcategoryId:string) => {
    if (req.method==="PUT") {
        
        try {
            
            // connect to db
            await connectToMongoDB();

            // find category and remove the subcategory reference
            const category = await CategoryModel.findByIdAndUpdate(
                categoryId, 
                {
                $pull: { subcategories: subcategoryId } // directly pull the subcategory by its ObjectId
                },
                { new: true } // returns the updated category after the pull operation
            );

            console.log(category);
            

            if (category) {
                return category
            } else {
                return false
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    } else {
        return false
    }
}

export const addSubcategoriesOfCategory = async(req:NextRequest,res:NextResponse,categoryId:string,subcategoryId:string) => {
    if (req.method==="PUT") {
        
        try {
            
            // connect to db
            await connectToMongoDB();

            // find category and remove the subcategory reference
            const category = await CategoryModel.findByIdAndUpdate(
                categoryId, 
                {
                $push: { subcategories: subcategoryId } // directly push the subcategory by its ObjectId
                },
                { new: true } // returns the updated category after the pull operation
            );

            console.log(category, "with the update");
            

            if (category) {
                return category
            } else {
                return false
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    } else {
        return false
    }
}