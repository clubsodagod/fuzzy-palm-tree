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


export type IdentifierModelsType = typeof CategoryModel | typeof SubcategoryModel;
export type CreateIdentifierFunction = (Model:IdentifierModelsType,name:string, tagline:string, description:string, photo:Photo, video:Video, req:NextRequest, res:NextResponse) => Promise<NextResponse|ICategory|undefined>


export const createIdentifier:CreateIdentifierFunction = async(Model,name,tagline,description,photo,video,req,res) => {

    // security? revalidate request method
    if(req.method==="POST"){
        // validate all arguments are passed properly
        if (!name||!description||!photo||!res) {
            throw new Error("All parameters must be provided.")
        } else {

            
            try {
                
                // connect to database
                await connectToMongoDB();

                // create new identifier
                const identifier = new Model({name, description,tagline});
                identifier.photo.portrait = photo.portrait;
                identifier.photo.landscape = photo.landscape;
                identifier.video.landscape = video.portrait;
                identifier.video.portrait = video.landscape;
                console.log(identifier);

                // validate new identifier
                if (!identifier) {
                    return NextResponse.json({message:`There was an error creating ${name.toUpperCase()} identifier. Please try again.`}, {status:500})
                } else {

                    // save new identifier
                    identifier.save();

                    return identifier as ICategory
                }


            } catch (error) {
                return NextResponse.json({message:`There was an error creating ${name} identifier.`, error:error}, {status:500})
            }
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

            // Get the schema of the model
            const schema = Model.schema;

            // Find all paths in the schema
            const paths = Object.keys(schema.paths);

            // Extract paths that are of type ObjectId (i.e., references)
            const populatePaths = paths.filter(path => {
                const schemaType = schema.paths[path].instance;
                const optionsType = schema.paths[path].options.type;

                // Check if the path is of type ObjectId or an array of ObjectId
                return schemaType === 'ObjectID' || 
                       (Array.isArray(optionsType) && optionsType[0] === mongoose.Schema.Types.ObjectId);
            });

            // Fetch identifiers with populated references
            const identifiers = await Model.find().populate(populatePaths);
            console.log(identifiers, "page 95");
            const fetchAndPopulateSubcategories = async (subcategories: (ObjectId | ISubcategory)[]) => {
                // Check if the subcategories array contains ObjectIds or Subcategory instances
                const populatedSubcategories = await Promise.all(
                    subcategories.map(async (subcategory) => {
                        if (mongoose.isValidObjectId(subcategory)) {
                            // If it's an ObjectId, fetch the full subcategory document
                            return await SubcategoryModel.findById(subcategory).exec();
                        } else {
                            // If it's already an instance of ISubcategory, return it directly
                            return subcategory;
                        }
                    })
                );
                return populatedSubcategories;
            };
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
            if(isCategory(identifier as Partial<ICategory|ISubcategory>)){
                // updatedIdentifier.subcategories = identifier.subcategories as ISubcategory
            }
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