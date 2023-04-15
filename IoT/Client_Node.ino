#include <ESP8266WiFi.h>

const char* ssid = "NodeMain";
const char* password = "testing";

void setup() {
  Serial.begin(115200); // Start serial communication
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to hotspot...");
  }
  Serial.println("Connected to hotspot");
}

void loop() {
  WiFiClient client("192.168.4.1", 80);
  if (client.connect()) {
    // Send a request to the server to get the sensor data
    client.println("GET /getSensorData HTTP/1.1");
    client.println("Host: 192.168.4.1");
    client.println("Connection: close");
    client.println();

    while (client.connected()) {
      // Wait for data to be available
      while (client.available() == 0) {
        delay(100);
      }

      // Read the incoming data from the server
      String data = client.readString();
      Serial.println("Received Sensor Data: " + data);
    }
    client.stop();
  }
  delay(5000); // Wait for 5 seconds before requesting the data again
}
