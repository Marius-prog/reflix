try:
    import pymongo
    from pymongo import MongoClient
    import pandas as pd
    import json
except Exception as e:
    print("Some Modules are Missing ")


class MongoDB(object):

    def __init__(self, dBName=None, collectionName=None):
        self.dBName = dBName
        self.collectionName = collectionName

        self.client = MongoClient(
            "mongodb+srv://admin:reflix123@cluster0.y8m8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

        self.DB = self.client[self.dBName]
        self.collection = self.DB[self.collectionName]

    def InsertData(self, path=None):
        df = pd.read_csv(path)
        data = df.to_dict('records')

        self.collection.insert_many(data, ordered=False)
        print("All the Data has been Exported to Mongo DB Server .... ")


if __name__ == "__main__":
    mongodb = MongoDB(dBName='Reflix', collectionName='Movie collection')
    mongodb.InsertData(path="Top 1000 IMDb movies_sorted_by_popularity_new.csv")
