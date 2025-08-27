import { setError } from "../../config/error";
import { CreateProfileDTO, UpdateProfileDTO } from "../../types/dto.dto";
import { AsyncResponseServer } from "../../types/express";
import { IProfileDoc } from "../../types/models";
import { Profile } from "../model/profile";




export const getProfile : AsyncResponseServer = async(req,res,next)=>{
    try {
        const profile : IProfileDoc[] = await Profile.find();
         res.status(200).json(profile)
        
    } catch (error) {
        return next(setError(400,"Cant find Profile 😢"))
    }

}


export const createProfile : AsyncResponseServer <{},CreateProfileDTO>= async(req,res,next)=>{
    try {
        const newProfile = new Profile(req.body);
        const profileBBDD: IProfileDoc= await newProfile.save();
        if(!profileBBDD){
            return next(setError(400,"Can't create Profile "));}
         res.status(201).json(profileBBDD)
        
    } catch (error) {
        return next(setError(400,"Can't create Profile 😢"));
    }
}

export const deleteProfile: AsyncResponseServer<{id : string}> = async (req,res , next )=>{
try {
    const {id} = req.params;
    
    const profile = await Profile.findByIdAndDelete(id);
    if(!profile){
        return next(setError(400,"Can't delete profile  😢"));
    }
    res.status(200).json(profile);
} catch (error) {
    return  next(setError(400,"Can't delete profile  😢"));
}

} 

export const updateProfile: AsyncResponseServer<{ id: string }, UpdateProfileDTO> = 
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const updated = await Profile.findByIdAndUpdate(
        id,
        { $set: req.body },   // actualiza solo los campos recibidos
        { new: true }
      );

      if (!updated) {
        return next(setError(404, "Profile not found"));
      }

      res.status(200).json(updated);
    } catch (err) {
      return next(setError(400, "Can't update Profile 😢"));
    }
};

