from fastapi import FastAPI
from starlette.staticfiles import StaticFiles
from uvicorn import run
from sys import argv

app = FastAPI()
app.mount("/images", StaticFiles(directory='images'))
app.mount("/", StaticFiles(directory='dist', html=True), name="static")


if __name__ == '__main__':
    run(app, host="0.0.0.0")
