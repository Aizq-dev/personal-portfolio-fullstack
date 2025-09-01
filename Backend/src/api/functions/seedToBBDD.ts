// src/seed/run-seed.ts
import mongoose from 'mongoose';
import { Project } from '../model/projects';
import { Profile } from '../model/profile';
import { seed } from '../seed/seed';
import { connectDB } from '../../config/db';
import "dotenv/config"


export async function runSeed() {
  // Si `seed.profile` es un único objeto, envuélvelo en array
  const profileDocs = seed.profile ? seed.profile : [];
  const projectDocs = seed.projects ?? [];

  // Vacía colecciones
  await Promise.all([Profile.deleteMany({}), Project.deleteMany({})]);

  // Inserta (insertMany crea la colección si no existe)
  const [profilesInserted, projectsInserted] = await Promise.all([
    Profile.insertMany(profileDocs),
    Project.insertMany(projectDocs),
  ]);

  return { profiles: profilesInserted.length, projects: projectsInserted.length };
}
connectDB()
const insert =async():Promise<void> =>  {
  try {
    
    const inserted = await runSeed();
    console.log('[seed] OK:', inserted);
    process.exit(0);
  } catch (e) {
    console.error('[seed] ERROR', e);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}
insert();
