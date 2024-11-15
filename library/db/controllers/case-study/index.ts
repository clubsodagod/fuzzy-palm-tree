import mongoose from "mongoose";
import { connectToMongoDB } from "../../db";
import slugify from "slugify";
import { CaseStudyModel } from "@/app/_database/models";
import { CaseStudyDocumentType } from "@/app/_database/models/case-study";




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


export async function getAllCaseStudies() {

    try {
        
        // connect to database
        await connectToMongoDB();

        // find case studies
        const caseStudies = await CaseStudyModel.find();

        // validate case studies
        if (caseStudies.length > 0) {
            return caseStudies
        }
    } catch (error) {
        return null
    }
}

export async function getAllCaseStudiesClient() {

    try {
        
        // connect to database
        await connectToMongoDB();

        // find case studies 
        const caseStudies = await fetch('https://fuzzy-palm-tree.vercel.app/api/user/portfolio/case-study/get/all', {
            method:'GET'
        }).then((res)=>res.json());
        console.log(caseStudies);
        
        // validate caseStudies
        if (caseStudies.caseStudies.length > 0) {
            console.log(caseStudies.caseStudies);
            
            return caseStudies.caseStudies
        } else {
            return {error:true, message:caseStudies.message}
        }
    } catch (error) {
        return null
    }
}