
import { connectToMongoDB } from "../../db";
import { TechnicalApplicationModel } from "../../models";
import slugify from "slugify";
import { TechnicalApplicationDocumentType } from "../../models/technicalApplication";




// validate if existing title exist
async function existingTitle(title:string) {
    const existingTitleDoc = await TechnicalApplicationModel.findOne({slug:slugify(title.toLowerCase())});
    console.log(existingTitleDoc);
    

    return existingTitleDoc != null ? true : false;
}

export async function createNewTechnicalApplication(technicalApplication: TechnicalApplicationDocumentType) {
    if (technicalApplication) {

        try {
            // connect to database
            await connectToMongoDB();
            console.log( await existingTitle(technicalApplication.name));
            
            // check title
            if(!(await existingTitle(technicalApplication.name))) {

                // create new case study document
                const newTechnicalApplication = new TechnicalApplicationModel();
                newTechnicalApplication.name = technicalApplication.name;
                newTechnicalApplication.slug = slugify(technicalApplication.name.toLowerCase());
                newTechnicalApplication.description = technicalApplication.description;
                newTechnicalApplication.photos = technicalApplication.photos;
                newTechnicalApplication.videos = technicalApplication.videos;
                newTechnicalApplication.technologiesUsed = technicalApplication.technologiesUsed;
                newTechnicalApplication.githubLink = technicalApplication.githubLink;
                newTechnicalApplication.link = technicalApplication.link;
                newTechnicalApplication.live = technicalApplication.live;


                if (newTechnicalApplication) {
                    console.log(newTechnicalApplication);

                    newTechnicalApplication.save();
                    return newTechnicalApplication
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