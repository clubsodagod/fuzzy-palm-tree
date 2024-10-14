import mongoose from "mongoose";
import { connectToMongoDB } from "../../db";
import { CaseStudyModel } from "../../models";
import { CaseStudyDocumentType } from "../../models/case-study";
import slugify from "slugify";




// validate if existing title exist
async function existingTitle(title:string) {
    const existingTitleDoc = await CaseStudyModel.findOne({slug:slugify(title.toLowerCase())});
    console.log(existingTitleDoc);
    

    return existingTitleDoc != null ? true : false;
}

export async function createNewCaseStudy(caseStudy: CaseStudyDocumentType) {
    if (caseStudy) {

        try {
            // connect to database
            await connectToMongoDB();
            console.log( await existingTitle(caseStudy.title));
            
            // check title
            if(!(await existingTitle(caseStudy.title))) {

                // create new case study document
                const newCaseStudy = new CaseStudyModel();
                newCaseStudy.title = caseStudy.title;
                newCaseStudy.type = caseStudy.type as "TechnicalApplication" | "Property";
                newCaseStudy.featuredImg = caseStudy.featuredImg;
                newCaseStudy.featuredVideo = caseStudy.featuredVideo;
                newCaseStudy.summary = caseStudy.summary;
                newCaseStudy.objectives = caseStudy.objectives;
                newCaseStudy.challenges = caseStudy.challenges;
                newCaseStudy.solutions = caseStudy.solutions;
                newCaseStudy.outcomes = caseStudy.outcomes;
                newCaseStudy.slug = slugify(caseStudy.title.toLowerCase());


                if (newCaseStudy) {
                    console.log(newCaseStudy);

                    newCaseStudy.save();
                    return newCaseStudy
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