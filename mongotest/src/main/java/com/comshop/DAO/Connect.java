package com.comshop.DAO;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class Connect {

    public void doConnection() {

        MongoClient mongoclient = MongoClients.create("mongodb+srv://diego:22043321.qaz@clustersomething-jrstw.gcp.mongodb.net/test?retryWrites=true&w=majority");
        MongoDatabase mdb = mongoclient.getDatabase("test");
        MongoCollection<Document> collection = mdb.getCollection("newCollection");

        Document doc = collection.find().first();
        System.out.println(doc.toJson());

//        MongoClientURI uri = new MongoClientURI(
//                "mongodb+srv://diego:22043321.qaz@clustersomething-jrstw.gcp.mongodb.net/test?retryWrites=true&w=majority");
//        MongoClient mongoClient = new MongoClient(uri);
//        MongoDatabase database = mongoClient.getDatabase("test");
//        MongoCollection<Document> collection = database.getCollection("test");

//        Document myDoc = collection.find().first();
//        System.out.println(myDoc.toJson());
    }
}
