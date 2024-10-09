import React, { useEffect, useState } from "react";

import { View, Text,  StyleSheet, ScrollView, TouchableOpacity,} from "react-native";
import axios from "axios";
import { LineChart } from "react-native-chart-kit";
const Dashboard = () => {
  const [sensorData, setSensorData] = useState(null);
  const hardcodedData = [
    {
      created_at: "2024-09-01T12:00:00Z",
      field1: 25,
      field2: 5,
      field3: 60,
      field4: 1.5,
      field5: 100,
    },
    {
      created_at: "2024-09-01T12:10:00Z",
      field1: 26,
      field2: 4,
      field3: 62,
      field4: 1.7,
      field5: 110,
    },
    {
      created_at: "2024-09-01T12:20:00Z",
      field1: 27,
      field2: 3,
      field3: 59,
      field4: 1.6,
      field5: 95,
    },
    {
      created_at: "2024-09-01T12:30:00Z",
      field1: 24,
      field2: 6,
      field3: 65,
      field4: 1.4,
      field5: 120,
    },
    {
      created_at: "2024-09-01T12:40:00Z",
      field1: 28,
      field2: 2,
      field3: 58,
      field4: 1.8,
      field5: 105,
    },
  ];

  // Function to fetch data from ThingSpeak (currently using hardcoded data)
  const fetchData = async () => {
    // Simulating an API call with hardcoded data
    setSensorData(hardcodedData);
    // Uncomment below to fetch live data when ready
    // try {
    //   const response = await axios.get("YOUR_THINGSPEAK_URL");
    //   setSensorData(response.data.feeds);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  // Control irrigation system (Tank ON/OFF)
  const controlIrrigation = (status) => {
    // Replace with your API request to control the tank
    axios
      .post("https://your-control-endpoint.com", { status })
      .then((response) => alert(`Tank turned ${status ? "ON" : "OFF"}`))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Smart Irrigation Dashboard</Text>

      {sensorData && (
        <View>
          {/* Temperature Chart */}
          <Text style={styles.chartLabel}>Temperature (°C)</Text>
          <LineChart
            data={{
              labels: sensorData.map((feed) =>
                new Date(feed.created_at).toLocaleTimeString()
              ),
              datasets: [
                {
                  data: sensorData.map((feed) => parseFloat(feed.field1)), // Assuming temperature is field1
                  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red
                },
              ],
            }}
            width={350} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#1E2923",
              backgroundGradientTo: "#08130D",
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chartStyle}
          />

          {/* Rainfall Chart */}
          <Text style={styles.chartLabel}>Rainfall (mm)</Text>
          <LineChart
            data={{
              labels: sensorData.map((feed) =>
                new Date(feed.created_at).toLocaleTimeString()
              ),
              datasets: [
                {
                  data: sensorData.map((feed) => parseFloat(feed.field2)), // Assuming rain is field2
                  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue
                },
              ],
            }}
            width={350} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#1E2923",
              backgroundGradientTo: "#08130D",
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chartStyle}
          />

          {/* Humidity Chart */}
          <Text style={styles.chartLabel}>Humidity (%)</Text>
          <LineChart
            data={{
              labels: sensorData.map((feed) =>
                new Date(feed.created_at).toLocaleTimeString()
              ),
              datasets: [
                {
                  data: sensorData.map((feed) => parseFloat(feed.field3)), // Assuming humidity is field3
                  color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Green
                },
              ],
            }}
            width={350} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#1E2923",
              backgroundGradientTo: "#08130D",
              color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Green
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chartStyle}
          />

          {/* Moisture Chart */}
          <Text style={styles.chartLabel}>Moisture (%)</Text>
          <LineChart
            data={{
              labels: sensorData.map((feed) =>
                new Date(feed.created_at).toLocaleTimeString()
              ),
              datasets: [
                {
                  data: sensorData.map((feed) => parseFloat(feed.field4)), // Assuming moisture is field4
                  color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // Orange
                },
              ],
            }}
            width={350} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#1E2923",
              backgroundGradientTo: "#08130D",
              color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // Orange
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chartStyle}
          />

          {/* NPK Chart */}
          <Text style={styles.chartLabel}>NPK (mg/kg)</Text>
          <LineChart
            data={{
              labels: sensorData.map((feed) =>
                new Date(feed.created_at).toLocaleTimeString()
              ),
              datasets: [
                {
                  data: sensorData.map((feed) => parseFloat(feed.field5)), // Assuming NPK is field5
                  color: (opacity = 1) => `rgba(128, 0, 128, ${opacity})`, // Purple
                },
              ],
            }}
            width={350} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#1E2923",
              backgroundGradientTo: "#08130D",
              color: (opacity = 1) => `rgba(128, 0, 128, ${opacity})`, // Purple
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chartStyle}
          />
        </View>
      )}

      {/* Tank control buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => controlIrrigation(true)}
        >
          <Text style={styles.buttonText}>Turn Pump ON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => controlIrrigation(false)}
        >
          <Text style={styles.buttonText}>Turn Pump OFF</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  chartLabel: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  chartStyle: {
    marginVertical: 1,
    borderRadius: 16,
  },
  button: {
    backgroundColor: "green", // Green background color
    padding: 10,
    borderRadius: 5,
    width: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // White text color
    fontWeight: "bold",
  },
});

export default Dashboard;
