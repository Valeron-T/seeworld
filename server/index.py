from flask import Flask, jsonify, request
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MySQL database connection details

# Configure before deployment
DB_HOST = ''
DB_USER = ''
DB_PASSWORD = ''
DB_NAME = ''

# Create a connection pool
conn = pymysql.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    db=DB_NAME,
    cursorclass=pymysql.cursors.DictCursor
)

class Destinations:
    def __init__(self, id, name, short_des, duration, description=None, meals=None, flights=None, img=None, highlights=None, itenary=None, included=None):
        self.id = id
        self.name = name
        self.short_des = short_des
        self.description = description
        self.duration = duration
        self.meals = meals
        self.flights = flights
        self.img = img
        self.highlights = highlights
        self.itenary = itenary
        self.included = included

    def get_essential(self):
        return {"id": self.id, "name":self.name, "short_des" : self.short_des, "duration": self.duration, "img": self.img}
    
    def get(self):
        return {"id": self.id, "name":self.name, "short_des" : self.short_des, "duration": self.duration, "img": self.img, "meals": self.meals, "flights": str(self.flights).split("&bs&"), "description": self.description, "highlights": str(self.highlights).split("&bs&"), "itenary": self.itenary, "included": self.included}


def get_destination(id):
    query = f"SELECT id, name, short_des, duration, img, description, meals, flights, highlights, itenary, included FROM destinations WHERE id = '{id}' "
    print(query)
    with conn.cursor() as cursor:
        try:
            cursor.execute(query)
        except pymysql.err.InterfaceError:
            conn.ping(reconnect=True)
            cursor.execute(query)        
        except pymysql.err.OperationalError:
            conn.ping(reconnect=True)
            cursor.execute(query)  
        destination = cursor.fetchall()
        return [Destinations(dest['id'], dest['name'], dest['short_des'], dest['duration'], description=dest['description'], img=dest['img'], meals=dest['meals'], flights=dest['flights'], highlights=dest['highlights'], itenary=dest['itenary'], included=dest['included'] ).get() for dest in destination][0]


# Function to fetch all destinations
def get_destinations(location=None, continent=None):
    query = "SELECT id, name, short_des, duration, img FROM destinations"
    
    if location or continent:
        query += " WHERE"

        if location:
            locations = location.split(",")  # Split the locations if it contains both
            if len(locations) > 1:  # If there are multiple locations
                query += " (" + " OR ".join([f"location = '{loc}'" for loc in locations]) + ")"
            else:
                query += f" location = '{locations[0]}'"

        if location and continent:
            query += " AND"

        if continent:
            continents = continent.split(",")  # Split the continents if it contains both
            if len(continents) > 1:  # If there are multiple continents
                query += " (" + " OR ".join([f"continent = '{cont}'" for cont in continents]) + ")"
            else:
                query += f" continent = '{continents[0]}'"

    print(query)

    with conn.cursor() as cursor:
        try:
            cursor.execute(query)
        except pymysql.err.InterfaceError:
            conn.ping(reconnect=True)
            cursor.execute(query)     
        except pymysql.err.OperationalError:
            conn.ping(reconnect=True)
            cursor.execute(query)      
        destinations = cursor.fetchall()
        return [Destinations(dest['id'], dest['name'], dest['short_des'], dest['duration'], img=dest['img']).get_essential() for dest in destinations]


@app.route('/destinations/<destination>', methods=['GET'])
def destination(destination):
    destination_details = get_destination(destination)
    # print(destinations)
    return jsonify({"result": destination_details})


@app.route('/destinations', methods=['GET'])
def destinations():
    location = request.args.get('location', None)
    continent = request.args.get('continent', None)
    
    destinations = get_destinations(location, continent)
    # print(destinations)
    return jsonify({"result": destinations})




@app.route('/')
def home():
    return "API is running"

# @app.teardown_appcontext
# def close_db(error):
#     conn.close()

if __name__ == '__main__':
    app.run(debug=True)