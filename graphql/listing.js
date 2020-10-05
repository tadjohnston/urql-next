export default `
query listing($listingId: String! $withSemPhone: Boolean = false, $photoOrder: String) {
  listing(listingId: $listingId) {
    ... on Listing {
      address
      adminFee
      apartmentAmenities
      applicationFee
      applicationUrl
      availableLeaseTerms {
        id
        label
      }
      aggregates {
        totalAvailable
        prices {
          low
          high
          bedroomBreakdown {
            priceLow
            bedCount
            unitsAvailable
          }
        }
        beds {
          low
          high
        }
        baths {
          low
          high
        }
      }
      availableUnitCount
      avgOverallRating
      bedsCat
      catsAllowed
      categoryFeatures {
        code
        message
      }
      categoryRatings {
        avgRating
        category
      }
      city
      citySeoPath
      communityAmenities
      covidmsg
      desktopPhone(sem: $withSemPhone)
      disclaimer
      dogsAllowed
      geoCode
      hasHdTour
      hasHdVideo
      hasVideosOrTours
      hdTourUrl
      hdTourUrlMobile
      hdVideoUrl
      incomeRestrictions {
        maxAnnualIncome
        maxOccupants
      }
      isCorePaid
      isPhoneVisible
      isApartment
      isActive
      isBasic
      isCallTwentyFourSeven
      isCurrentFeatured
      isCurrentSpotlight
      lastUpdate
      latitude
      leadEmails
      leadPhoneRequired
      listingId
      listingBedLow
      listingBedHigh
      listingBathLow
      listingBathHigh
      listingDescription
      listingPriceLow
      listingPriceHigh
      listingSeoPath
      listingSourceId
      listingSqFtLow
      listingSqFtHigh
      longitude
      mgtcoId
      mgtcoLogo
      mgtCoName
      mgtCoDescription
      mPhone(sem: $withSemPhone)
      mustHaveAmenities
      nearbyListings
      neighborhoods
      numFloorplans
      numPhotos
      numRatings
      officeHours {
        day
        openTime
        closeTime
        comments
      }
      overallRatings {
        count1
        count2
        count3
        count4
        count5
      }
      parking {
        comment
        isAssigned
        perSpaceFee
        totalSpaces
        type
      }
      petPolicies {
        comment
        id
        label
        maximumPets
        weightRestriction
        initialFee
        additionalRent
        deposit
      }
      photoCount
      photos(limit: 10, photoOrder: $photoOrder) {
        path
        caption
      }
      propertyLabel
      propertyType
      propertyWebsite
      ptEmail
      recommendedListings
      selfGuidedTour
      tourPropertyId
      tourProvider
      tplSource
      revenue
      schools {
        attendanceZoneSchoolIds
        schoolsDisplay
      }
      sortSqFt
      sources
      sqFootCat
      specialTermsText
      state
      timeZoneId
      totalUnits
      unitSqFt
      videoCallTour
      videos {
        caption
        thumbnail
        url
      }
      zipCode
    }
  }
  floorplans(listingId: $listingId) {
    count
    total
    noVacancy
    propertyName
    revenue
    properties {
      availabilityUrl
      availableUnitCount
      bedrooms
      dateAvailable
      deposit
      flaDisplay
      floorplanImage
      fullBaths
      furnished3D
      halfBaths
      priceHigh
      priceLow
      term
      unfurnished3D
      unitLayoutId
      units {
        dateAvailable
        isUnavailable
        rent
        sqft
        unitId
        unitFloor
      }
      unitStyle
      unitSqFt
      unitUnavailable
    }
  }
}
`
