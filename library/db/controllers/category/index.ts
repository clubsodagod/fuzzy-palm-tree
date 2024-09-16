import { NextRequest, NextResponse } from "next/server"
import { connectToMongoDB } from "../../db"
import { ICategory } from "../../models/category"
import { CategoryModel, SubcategoryModel } from "../../models"
import { NextApiRequest } from "next"
import { IUser } from "../../models/user"
import { ISubcategory } from "../../models/subcategory"

