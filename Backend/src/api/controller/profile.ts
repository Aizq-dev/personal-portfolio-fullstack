
import { setError } from "../../config/error";
import { CreateProfileDTO, UpdateProfileDTO } from "../../types/dto.dto";
import { AsyncResponseServer } from "../../types/express";
import { IProfileDoc } from "../../types/models";
import { Profile } from "../model/profile";

/** Lang helper: solo "es" | "en", por defecto "es" */
const getLang = (q: any): "es" | "en" => {
  const l = String(q?.lang || "es").toLowerCase();
  return l === "en" ? "en" : "es";
};


export const getProfile: AsyncResponseServer = async (req, res, next) => {
  try {
    const lang = getLang(req.query);
    let doc = await Profile.findOne({ locale: lang }).lean<IProfileDoc>().exec();

    // fallback a ES si no hay EN
    if (!doc && lang !== "es") {
      doc = await Profile.findOne({ locale: "es" }).lean<IProfileDoc>().exec();
    }

    if (!doc) {
      next(setError(404, "Profile not found"));
      return;
    }

    res.status(200).json(doc);
    return;
  } catch (error) {
    next(setError(400, "Cant find Profile 😢"));
    return;
  }
};


export const createProfile: AsyncResponseServer<{}, CreateProfileDTO> = async (req, res, next) => {
  try {
    const body = req.body as CreateProfileDTO;

   
    if (!body?.locale || !["es", "en"].includes(body.locale)) {
      next(setError(400, "Field 'locale' must be 'es' or 'en'"));
      return;
    }
    if (!body?.name || !body?.avatar) {
      next(setError(400, "Fields 'name' and 'avatar' are required"));
      return;
    }

    const newProfile = new Profile(body);
    const saved = (await newProfile.save()) as IProfileDoc;

    res.status(201).json(saved);
    return;
  } catch (error: any) {
    // Duplicado por índice único { locale: 1 }
    if (error?.code === 11000) {
      next(setError(409, "A profile for this locale already exists"));
      return;
    }
    next(setError(400, "Can't create Profile 😢"));
    return;
  }
};

export const deleteProfile: AsyncResponseServer<{ id: string }> = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Profile.findByIdAndDelete(id).exec();
    if (!deleted) {
      next(setError(400, "Can't delete profile  😢"));
      return;
    }
    res.status(200).json(deleted);
    return;
  } catch {
    next(setError(400, "Can't delete profile  😢"));
    return;
  }
};

export const updateProfile: AsyncResponseServer<{ id: string }, UpdateProfileDTO> = async (req, res, next) => {
  try {
    const { id } = req.params;

    // (Opcional) si no quieres permitir cambiar el locale aquí, bórralo del body:
    // const { locale, ...rest } = req.body as UpdateProfileDTO;

    const updated = await Profile.findByIdAndUpdate(
      id,
      { $set: req.body }, // o { $set: rest } si bloqueas locale
      { new: true }
    ).exec();

    if (!updated) {
      next(setError(404, "Profile not found"));
      return;
    }

    res.status(200).json(updated);
    return;
  } catch {
    next(setError(400, "Can't update Profile 😢"));
    return;
  }
};
