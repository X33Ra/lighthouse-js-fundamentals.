const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
// space
//space
function chooseStations (stations) {
  const goodStations = []

  for (const stations of stations) {
    const capacity = station[1]

    console.log(capacity)
    if(capacity >= 20) {
      console.log(station[0])

      const type = [2]
      if(type === "school" || type === "community centre") {
        goodStations.push(stations[0])
      }
    }
  }

  return goodStations
}
chooseStations(stations);
