
import { connectToMongoDB } from "../../db";
import { PropertyModel, TechnicalApplicationModel } from "../../models";
import slugify from "slugify";
import { PropertyDocumentType } from "../../models/property";




// validate if existing title exist
async function existingProperty(address:string) {
    const existingTitleDoc = await PropertyModel.findOne({address:slugify(address.toLowerCase())});
    console.log(existingTitleDoc);
    

    return existingTitleDoc != null ? true : false;
}

export async function createNewProperty(property: PropertyDocumentType) {
    if (property) {

        try {
            // connect to database
            await connectToMongoDB();
            console.log( await existingProperty(property.address));
            
            // check title
            if(!(await existingProperty(property.address))) {

                // create new case study document
                const newProperty = new PropertyModel();
                newProperty.address = property.address.toLowerCase();
                newProperty.investmentType = property.investmentType.toLowerCase() as "rental" | "wholesale" | "fix and flip";
                newProperty.slug = slugify(property.address.toLowerCase());
                newProperty.acquired = property.acquired;
                newProperty.purchasePrice = property.purchasePrice;
                newProperty.rehabCost = property.rehabCost;
                newProperty.currentValue = property.currentValue;
                newProperty.photos = property.photos;
                newProperty.videos = property.videos;
                newProperty.monthlyFinancialFigures = property.monthlyFinancialFigures;
                newProperty.description = property.description;
                newProperty.live = property.live;


                if (newProperty) {
                    console.log(newProperty);

                    newProperty.save();
                    return newProperty
                } else {
                    return null
                }                
            } else {
                return null
            }

        } catch (error) {
            console.log(error);
            return null
        }
    } else {
        return null
    }
}