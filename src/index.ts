import "reflect-metadata";
import {createConnection} from "typeorm";
import {Photo} from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetaData";

createConnection().then(async connection => {
    /* let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

     return connection.manager
            .save(photo)
            .then(photo => {
                console.log("Photo has been saved. Photo id is", photo.id);
    }); 
    //Entity Manager
    await connection.manager.save(photo);
    console.log("Photo has been saved"); 
    let savedPhotos = await connection.manager.find(Photo);
    console.log("All photos from the db: ", savedPhotos); 
    //Repository
    let photoRepository = connection.getRepository(Photo);

    await photoRepository.save(photo);
    console.log("Photo has been saved");

    let savedPhotos = await photoRepository.find();
    console.log("All photos from the db: ", savedPhotos);

    let allPhotos = await photoRepository.find();
    console.log("All photos from the db: ", allPhotos);

    let firstPhoto = await photoRepository.findOne(1);
    console.log("First photo from the db: ", firstPhoto);

    let meAndBearsPhoto = await photoRepository.findOne({ name: "Me and Bears" });
    console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

    let allViewedPhotos = await photoRepository.find({ views: 1 });
    console.log("All viewed photos: ", allViewedPhotos);

    let allPublishedPhotos = await photoRepository.find({ isPublished: true });
    console.log("All published photos: ", allPublishedPhotos);

    let [allPhotos, photosCount] = await photoRepository.findAndCount();
    console.log("All photos: ", allPhotos);
    console.log("Photos count: ", photosCount);

    //update database
    let photoToUpdate = await photoRepository.findOne(1);
    photoToUpdate.name = "Me, my friends and polar bears";
    await photoRepository.save(photoToUpdate);

    //remove database
    let photoToRemove = await photoRepository.findOne(1);
    await photoRepository.remove(photoToRemove);
    
    // one on one realtions
    let photo = new Photo();
    photo.name = "Saya dan Beruang";
    photo.description = "Saya dekat beruang kutub";
    photo.filename = "foto-dengan-beruang.jpg";
    photo.isPublished = true;

    // create a photo metadata
    let metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = "cybershoot";
    metadata.orientation = "portait";
    metadata.photo = photo; // this way we connect them */

    // get entity repositories
    let photoRepository = connection.getRepository(Photo);
    let metadataRepository = connection.getRepository(PhotoMetadata);

    // first we should save a photo
//    await photoRepository.save(photo);

    // photo is saved. Now we need to save a photo metadata
  //  await metadataRepository.save(metadata);

    // done
    //console.log("Metadata is saved, and relation between metadata and photo is created in the database too");
    //let photos = await photoRepository.find({ relations: ["metadata"] });
    //console.log(photos);

//     let photos = await connection
//             .getRepository(Photo)
//             .createQueryBuilder("photo")
//             .innerJoinAndSelect("photo.metadata", "metadata")
//             .getMany();

//    console.log(photos);

// 


    
}).catch(error => console.log(error));