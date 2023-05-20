import requests
from flask import Flask, render_template, request, jsonify, send_from_directory
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
api_key = os.getenv("OPENWEATHER_API_KEY")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/get-weather")
def get_weather():
    city = request.args.get("city")
    weather_data = get_weather_data(city)
    return jsonify(weather_data)


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/download-cv")
def download_cv():
    return send_from_directory(os.path.join(os.path.abspath(''), "static"), "cv-alexander-z.pdf", as_attachment=True)


def get_weather_data(city):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}"
    response = requests.get(url)
    data = response.json()

    if data["cod"] == 200:
        weather_data = {
            "city": data["name"],
            "temperature": data["main"]["temp"],
            "description": data["weather"][0]["description"],
            "humidity": data["main"]["humidity"],
            "wind_speed": data["wind"]["speed"],
            "pressure": data["main"]["pressure"],
            "sunrise": datetime.fromtimestamp(data["sys"]["sunrise"]).strftime('%H:%M:%S'),
            "sunset": datetime.fromtimestamp(data["sys"]["sunset"]).strftime('%H:%M:%S')
        }
        return weather_data
    else:
        return None


if __name__ == "__main__":
    app.run(debug=True)
