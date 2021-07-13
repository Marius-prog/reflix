try:
    import pymongo
    from pymongo import MongoClient
    import pandas as pd
    import json
    import schedule
    import time
except Exception as e:
    print("Some Modules are Missing ")

from scraper import scrape


class MongoDB(object):

    def __init__(self, dBName=None, collectionName=None):
        self.dBName = dBName
        self.collectionName = collectionName

        self.client = MongoClient(
            "mongodb+srv://reflix:reflix123@cluster0.y8m8v.mongodb.net/reflix?retryWrites=true&w=majority")

        self.DB = self.client[self.dBName]
        self.collection = self.DB[self.collectionName]

    def InsertData(self, path=None):
        df = pd.read_csv(path)
        data = df.to_dict('records')

        self.collection.insert_many(data, ordered=False)
        print("All the Data has been Exported to Mongo DB Server .... ")


def run_mongo_update():
    movie_list = scrape()
    movie_list.head(5)
    movie_list.to_csv("Top 1000 IMDb movies_sorted_by_popularity_new.csv")
    mongodb = MongoDB(dBName='reflix', collectionName='movies')
    try:
        mongodb.InsertData(path="Top 1000 IMDb movies_sorted_by_popularity_new.csv")
    except Exception as e:
        movie_list.to_csv("Top 1000 IMDb_error.csv")
        print('an exception occurred: ', e)

    f = open('Top 1000 IMDb movies_sorted_by_popularity_new.csv', 'r+')
    f.truncate(0)


def go():
    run_mongo_update()


schedule.every(3).seconds.do(go)

while True:
    schedule.run_pending()
    time.sleep(1.3)
