# import schedule
# import time
#
#
# def show_name():
#     print('marius')
#     print('herkus')
#
#
# schedule.every(10).seconds.do(show_name)
#
# while 1:
#     schedule.run_pending()
#     time.sleep(2)

import imdb  # pip install IMDbPY

ia = imdb.IMDb()

list_of_movies = ia.search_movie("string text")
# [ia.(m, info=['main', 'votes']) for m in list_of_movies[:1]]
for m in list_of_movies[:1]:
    yt_search_term = m.get("name") + "trailer"
    # connect to YT API to start that part of the search.
