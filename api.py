from fastapi import FastAPI
from starlette.staticfiles import StaticFiles
from uvicorn import run
from sys import argv

app = FastAPI()

apiPrefix = '/api'
api = FastAPI(openapi_prefix=apiPrefix)

@api.get('/cover')
def cover():
    return '/images/elsuit.jpg'


app.mount(apiPrefix, api)
app.mount("/images", StaticFiles(directory='images'))
app.mount("/", StaticFiles(directory='dist', html=True), name="static")



if __name__ == '__main__':
    run(app, host="0.0.0.0")
