import schedule
import time


def show_name():
    print('marius')
    print('herkus')


schedule.every(10).seconds.do(show_name)

while 1:
    schedule.run_pending()
    time.sleep(2)
