
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date (startDate)
  }
  yearsExperienceFromBeginningOf(year){

    return new Date(year).getFullYear() - this.startDate.getFullYear()
  }
}




class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled () {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ]

    let verticalDistance = parseInt(
      this.endingLocation.vertical - this.beginningLocation.vertical)

    let horizontalDistance =
      eastWest.indexOf(this.endingLocation.horizontal) -
      eastWest.indexOf(this.beginningLocation.horizontal)
      
    return verticalDistance + horizontalDistance
  }
   estimatedTime (isPeakHour) {
    let distance = this.blocksTravelled()
    if (isPeakHour === true) {
      return distance / 2
    } else {
      return distance / 3
    }
  }
}
