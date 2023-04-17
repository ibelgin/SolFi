#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>

// Set the credentials for your WiFi network
const char *ssid = "NodeMain";
const char *password = "testing";

// Set the Firebase project's authentication credentials
#define FIREBASE_HOST "solfi.firebaseio.com"
#define FIREBASE_AUTH "AIzaSyBb-HcuoEwRvmjpcAyWLVwg32CQ49wKx-U"

const firebaseConfig = {
  authDomain : "sol-fi.firebaseapp.com",
  projectId : "sol-fi",
  storageBucket : "sol-fi.appspot.com",
  messagingSenderId : "814353624",
  appId : "1:814353624:web:91f03d452f996805b39bad",
  measurementId : "G-NWTKC5Z06Z"
};

void setup()
{
  pinMode(LED_PIN, OUTPUT);   // Set the LED pin as output
  digitalWrite(LED_PIN, LOW); // Turn off the LED
  Serial.begin(115200);       // Start serial communication
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("Connecting to hotspot...");
  }
  Serial.println("Connected to hotspot");
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop()
{
  WiFiClient client("192.168.4.1", 80);
  if (client.connect())
  {
    // Send a request to the server to get the sensor data
    client.println("GET /getSensorData HTTP/1.1");
    client.println("Host: 192.168.4.1");
    client.println("Connection: close");
    client.println();

    while (client.connected())
    {
      // Wait for data to be available
      while (client.available() == 0)
      {
        delay(100);
      }

      // Read the incoming data from the server
      String data = client.readString();
      Serial.println("Received Sensor Data: " + data);

      // Push the received data to the Firebase Realtime Database
      Firebase.pushString("/sensor-data", data);

      // Blink the LED to indicate data transmission
      digitalWrite(LED_PIN, HIGH);
      delay(100);
      digitalWrite(LED_PIN, LOW);
    }
    client.stop();
  }
  delay(5000); // Wait for 5 seconds before requesting the data again
}
