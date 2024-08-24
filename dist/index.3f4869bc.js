function n(n){return n&&n.__esModule?n.default:n}var e={};const t=/*@__PURE__*/n(e=JSON.parse('{"API_URL":"https://www.booking.com/dml/graphql?label=gen173nr-1BCAEoggI46AdIM1gEaGyIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4AofIxbMGwAIB0gIkNDFkMDkyZDktMDFlZC00NzMxLTkyMjMtNGFhYWIxNjEwMjg12AIF4AIB&sid=aa4f62f572ac5f487c282f0f11ec409c&aid=304142&ss=Bangalore&ssne=Bangalore&ssne_untouched=Bangalore&lang=en-gb&src=index&dest_id=-2090174&dest_type=city&checkin=2024-06-18&checkout=2024-06-19&group_adults=1&no_rooms=1&group_children=0&nflt=distance=3000","API_PAYLOAD":{"operationName":"FullSearch","variables":{"input":{"acidCarouselContext":null,"childrenAges":[],"dates":{"checkin":"2024-06-18","checkout":"2024-06-19"},"doAvailabilityCheck":false,"encodedAutocompleteMeta":null,"enableCampaigns":true,"filters":{"selectedFilters":"distance=3000"},"selectedFilterSources":["PREVIOUS"],"flexibleDatesConfig":{"broadDatesCalendar":{"checkinMonths":[],"los":[],"startWeekdays":[]},"dateFlexUseCase":"DATE_RANGE","dateRangeCalendar":{"checkin":["2024-06-18"],"checkout":["2024-06-19"]}},"forcedBlocks":null,"location":{"searchString":"Bangalore","destType":"LATLONG","latitude":41.8804017,"longitude":-87.6302038},"metaContext":{"metaCampaignId":0,"externalTotalPrice":null,"feedPrice":null,"hotelCenterAccountId":null,"rateRuleId":null,"dragongateTraceId":null,"pricingProductsTag":null},"nbRooms":1,"nbAdults":1,"nbChildren":0,"showAparthotelAsHotel":true,"needsRoomsMatch":false,"optionalFeatures":{"forceArpExperiments":true,"testProperties":false},"pagination":{"rowsPerPage":50,"offset":0},"rawQueryForSession":"/searchresults.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaGyIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4AofIxbMGwAIB0gIkNDFkMDkyZDktMDFlZC00NzMxLTkyMjMtNGFhYWIxNjEwMjg12AIF4AIB&sid=aa4f62f572ac5f487c282f0f11ec409c&aid=304142&ss=Bangalore&ssne=Bangalore&ssne_untouched=Bangalore&lang=en-gb&src=index&dest_id=-2090174&dest_type=city&checkin=2024-06-18&checkout=2024-06-19&group_adults=1&no_rooms=1&group_children=0&nflt=distance%3D3000","referrerBlock":null,"sbCalendarOpen":false,"sorters":{"selectedSorter":null,"referenceGeoId":null,"tripTypeIntentId":null},"travelPurpose":2,"seoThemeIds":[],"useSearchParamsFromSession":true,"merchInput":{"testCampaignIds":[]}},"carouselLowCodeExp":false},"extensions":{},"query":"query FullSearch($input: SearchQueryInput!, $carouselLowCodeExp: Boolean!) {\\n  searchQueries {\\n    search(input: $input) {\\n      ...FullSearchFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment FullSearchFragment on SearchQueryOutput {\\n  banners {\\n    ...Banner\\n    __typename\\n  }\\n  breadcrumbs {\\n    ... on SearchResultsBreadcrumb {\\n      ...SearchResultsBreadcrumb\\n      __typename\\n    }\\n    ... on LandingPageBreadcrumb {\\n      ...LandingPageBreadcrumb\\n      __typename\\n    }\\n    __typename\\n  }\\n  carousels {\\n    ...Carousel\\n    __typename\\n  }\\n  destinationLocation {\\n    ...DestinationLocation\\n    __typename\\n  }\\n  entireHomesSearchEnabled\\n  dateFlexibilityOptions {\\n    enabled\\n    __typename\\n  }\\n  flexibleDatesConfig {\\n    broadDatesCalendar {\\n      checkinMonths\\n      los\\n      startWeekdays\\n      losType\\n      __typename\\n    }\\n    dateFlexUseCase\\n    dateRangeCalendar {\\n      flexWindow\\n      checkin\\n      checkout\\n      __typename\\n    }\\n    __typename\\n  }\\n  filters {\\n    ...FilterData\\n    __typename\\n  }\\n  filtersTrackOnView {\\n    type\\n    experimentHash\\n    value\\n    __typename\\n  }\\n  appliedFilterOptions {\\n    ...FilterOption\\n    __typename\\n  }\\n  recommendedFilterOptions {\\n    ...FilterOption\\n    __typename\\n  }\\n  pagination {\\n    nbResultsPerPage\\n    nbResultsTotal\\n    __typename\\n  }\\n  tripTypes {\\n    ...TripTypesData\\n    __typename\\n  }\\n  results {\\n    ...BasicPropertyData\\n    ...MatchingUnitConfigurations\\n    ...PropertyBlocks\\n    ...BookerExperienceData\\n    priceDisplayInfoIrene {\\n      ...PriceDisplayInfoIrene\\n      __typename\\n    }\\n    licenseDetails {\\n      nextToHotelName\\n      __typename\\n    }\\n    isTpiExclusiveProperty\\n    propertyCribsAvailabilityLabel\\n    mlBookingHomeTags\\n    trackOnView {\\n      experimentTag\\n      __typename\\n    }\\n    __typename\\n  }\\n  searchMeta {\\n    ...SearchMetadata\\n    __typename\\n  }\\n  sorters {\\n    option {\\n      ...SorterFields\\n      __typename\\n    }\\n    __typename\\n  }\\n  oneOfThreeDeal {\\n    ...OneOfThreeDeal\\n    __typename\\n  }\\n  zeroResultsSection {\\n    ...ZeroResultsSection\\n    __typename\\n  }\\n  rocketmilesSearchUuid\\n  previousSearches {\\n    ...PreviousSearches\\n    __typename\\n  }\\n  frontierThemes {\\n    ...FrontierThemes\\n    __typename\\n  }\\n  merchComponents {\\n    ...MerchRegionIrene\\n    __typename\\n  }\\n  wishlistData {\\n    numProperties\\n    __typename\\n  }\\n  seoThemes {\\n    id\\n    caption\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment BasicPropertyData on SearchResultProperty {\\n  acceptsWalletCredit\\n  basicPropertyData {\\n    accommodationTypeId\\n    id\\n    isTestProperty\\n    location {\\n      address\\n      city\\n      countryCode\\n      __typename\\n    }\\n    pageName\\n    ufi\\n    photos {\\n      main {\\n        highResUrl {\\n          relativeUrl\\n          __typename\\n        }\\n        lowResUrl {\\n          relativeUrl\\n          __typename\\n        }\\n        highResJpegUrl {\\n          relativeUrl\\n          __typename\\n        }\\n        lowResJpegUrl {\\n          relativeUrl\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    reviewScore: reviews {\\n      score: totalScore\\n      reviewCount: reviewsCount\\n      totalScoreTextTag {\\n        translation\\n        __typename\\n      }\\n      showScore\\n      secondaryScore\\n      secondaryTextTag {\\n        translation\\n        __typename\\n      }\\n      showSecondaryScore\\n      __typename\\n    }\\n    externalReviewScore: externalReviews {\\n      score: totalScore\\n      reviewCount: reviewsCount\\n      showScore\\n      totalScoreTextTag {\\n        translation\\n        __typename\\n      }\\n      __typename\\n    }\\n    starRating {\\n      value\\n      symbol\\n      caption {\\n        translation\\n        __typename\\n      }\\n      tocLink {\\n        translation\\n        __typename\\n      }\\n      showAdditionalInfoIcon\\n      __typename\\n    }\\n    isClosed\\n    paymentConfig {\\n      installments {\\n        minPriceFormatted\\n        maxAcceptCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  badges {\\n    caption {\\n      translation\\n      __typename\\n    }\\n    closedFacilities {\\n      startDate\\n      endDate\\n      __typename\\n    }\\n    __typename\\n  }\\n  customBadges {\\n    showSkiToDoor\\n    showBhTravelCreditBadge\\n    showOnlineCheckinBadge\\n    __typename\\n  }\\n  description {\\n    text\\n    __typename\\n  }\\n  displayName {\\n    text\\n    translationTag {\\n      translation\\n      __typename\\n    }\\n    __typename\\n  }\\n  geniusInfo {\\n    benefitsCommunication {\\n      header {\\n        title\\n        __typename\\n      }\\n      items {\\n        title\\n        __typename\\n      }\\n      __typename\\n    }\\n    geniusBenefits\\n    geniusBenefitsData {\\n      hotelCardHasFreeBreakfast\\n      hotelCardHasFreeRoomUpgrade\\n      sortedBenefits\\n      __typename\\n    }\\n    showGeniusRateBadge\\n    __typename\\n  }\\n  location {\\n    displayLocation\\n    mainDistance\\n    publicTransportDistanceDescription\\n    skiLiftDistance\\n    beachDistance\\n    nearbyBeachNames\\n    beachWalkingTime\\n    geoDistanceMeters\\n    __typename\\n  }\\n  mealPlanIncluded {\\n    mealPlanType\\n    text\\n    __typename\\n  }\\n  persuasion {\\n    autoextended\\n    geniusRateAvailable\\n    highlighted\\n    preferred\\n    preferredPlus\\n    showNativeAdLabel\\n    nativeAdId\\n    nativeAdsCpc\\n    nativeAdsTracking\\n    sponsoredAdsData {\\n      isDsaCompliant\\n      legalEntityName\\n      sponsoredAdsDesign\\n      __typename\\n    }\\n    __typename\\n  }\\n  policies {\\n    showFreeCancellation\\n    showNoPrepayment\\n    enableJapaneseUsersSpecialCase\\n    __typename\\n  }\\n  ribbon {\\n    ribbonType\\n    text\\n    __typename\\n  }\\n  recommendedDate {\\n    checkin\\n    checkout\\n    lengthOfStay\\n    __typename\\n  }\\n  showGeniusLoginMessage\\n  hostTraderLabel\\n  soldOutInfo {\\n    isSoldOut\\n    messages {\\n      text\\n      __typename\\n    }\\n    alternativeDatesMessages {\\n      text\\n      __typename\\n    }\\n    __typename\\n  }\\n  nbWishlists\\n  visibilityBoosterEnabled\\n  showAdLabel\\n  isNewlyOpened\\n  propertySustainability {\\n    isSustainable\\n    tier {\\n      type\\n      __typename\\n    }\\n    facilities {\\n      id\\n      __typename\\n    }\\n    certifications {\\n      name\\n      __typename\\n    }\\n    chainProgrammes {\\n      chainName\\n      programmeName\\n      __typename\\n    }\\n    levelId\\n    __typename\\n  }\\n  seoThemes {\\n    caption\\n    __typename\\n  }\\n  relocationMode {\\n    distanceToCityCenterKm\\n    distanceToCityCenterMiles\\n    distanceToOriginalHotelKm\\n    distanceToOriginalHotelMiles\\n    phoneNumber\\n    __typename\\n  }\\n  bundleRatesAvailable\\n  __typename\\n}\\n\\nfragment Banner on Banner {\\n  name\\n  type\\n  isDismissible\\n  showAfterDismissedDuration\\n  position\\n  requestAlternativeDates\\n  merchId\\n  title {\\n    text\\n    __typename\\n  }\\n  imageUrl\\n  paragraphs {\\n    text\\n    __typename\\n  }\\n  metadata {\\n    key\\n    value\\n    __typename\\n  }\\n  pendingReviewInfo {\\n    propertyPhoto {\\n      lowResUrl {\\n        relativeUrl\\n        __typename\\n      }\\n      lowResJpegUrl {\\n        relativeUrl\\n        __typename\\n      }\\n      __typename\\n    }\\n    propertyName\\n    urlAccessCode\\n    __typename\\n  }\\n  nbDeals\\n  primaryAction {\\n    text {\\n      text\\n      __typename\\n    }\\n    action {\\n      name\\n      context {\\n        key\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  secondaryAction {\\n    text {\\n      text\\n      __typename\\n    }\\n    action {\\n      name\\n      context {\\n        key\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  iconName\\n  flexibleFilterOptions {\\n    optionId\\n    filterName\\n    __typename\\n  }\\n  trackOnView {\\n    type\\n    experimentHash\\n    value\\n    __typename\\n  }\\n  dateFlexQueryOptions {\\n    text {\\n      text\\n      __typename\\n    }\\n    action {\\n      name\\n      context {\\n        key\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    isApplied\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment Carousel on Carousel {\\n  aggregatedCountsByFilterId\\n  carouselId\\n  position\\n  contentType\\n  hotelId\\n  name\\n  soldoutProperties\\n  priority\\n  themeId\\n  frontierThemeIds\\n  title {\\n    text\\n    __typename\\n  }\\n  slides {\\n    captionText {\\n      text\\n      __typename\\n    }\\n    name\\n    photoUrl\\n    subtitle {\\n      text\\n      __typename\\n    }\\n    type\\n    title {\\n      text\\n      __typename\\n    }\\n    action {\\n      context {\\n        key\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DestinationLocation on DestinationLocation {\\n  name {\\n    text\\n    __typename\\n  }\\n  inName {\\n    text\\n    __typename\\n  }\\n  countryCode\\n  ufi\\n  __typename\\n}\\n\\nfragment FilterData on Filter {\\n  trackOnView {\\n    type\\n    experimentHash\\n    value\\n    __typename\\n  }\\n  trackOnClick {\\n    type\\n    experimentHash\\n    value\\n    __typename\\n  }\\n  name\\n  field\\n  category\\n  filterStyle\\n  title {\\n    text\\n    translationTag {\\n      translation\\n      __typename\\n    }\\n    __typename\\n  }\\n  subtitle\\n  options {\\n    parentId\\n    genericId\\n    trackOnView {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnClick {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnSelect {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnDeSelect {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnViewPopular {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnClickPopular {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnSelectPopular {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnDeSelectPopular {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    ...FilterOption\\n    __typename\\n  }\\n  filterLayout {\\n    isCollapsable\\n    collapsedCount\\n    __typename\\n  }\\n  stepperOptions {\\n    min\\n    max\\n    default\\n    selected\\n    title {\\n      text\\n      translationTag {\\n        translation\\n        __typename\\n      }\\n      __typename\\n    }\\n    field\\n    labels {\\n      text\\n      translationTag {\\n        translation\\n        __typename\\n      }\\n      __typename\\n    }\\n    trackOnView {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnClick {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnSelect {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnDeSelect {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnClickDecrease {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnClickIncrease {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnDecrease {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    trackOnIncrease {\\n      type\\n      experimentHash\\n      value\\n      __typename\\n    }\\n    __typename\\n  }\\n  sliderOptions {\\n    min\\n    max\\n    minSelected\\n    maxSelected\\n    minPriceStep\\n    minSelectedFormatted\\n    currency\\n    histogram\\n    selectedRange {\\n      translation\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FilterOption on Option {\\n  optionId: id\\n  count\\n  selected\\n  urlId\\n  source\\n  additionalLabel {\\n    text\\n    translationTag {\\n      translation\\n      __typename\\n    }\\n    __typename\\n  }\\n  value {\\n    text\\n    translationTag {\\n      translation\\n      __typename\\n    }\\n    __typename\\n  }\\n  starRating {\\n    value\\n    symbol\\n    caption {\\n      translation\\n      __typename\\n    }\\n    showAdditionalInfoIcon\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment LandingPageBreadcrumb on LandingPageBreadcrumb {\\n  destType\\n  name\\n  urlParts\\n  __typename\\n}\\n\\nfragment MatchingUnitConfigurations on SearchResultProperty {\\n  matchingUnitConfigurations {\\n    commonConfiguration {\\n      name\\n      unitId\\n      bedConfigurations {\\n        beds {\\n          count\\n          type\\n          __typename\\n        }\\n        nbAllBeds\\n        __typename\\n      }\\n      nbAllBeds\\n      nbBathrooms\\n      nbBedrooms\\n      nbKitchens\\n      nbLivingrooms\\n      nbUnits\\n      unitTypeNames {\\n        translation\\n        __typename\\n      }\\n      localizedArea {\\n        localizedArea\\n        unit\\n        __typename\\n      }\\n      __typename\\n    }\\n    unitConfigurations {\\n      name\\n      unitId\\n      bedConfigurations {\\n        beds {\\n          count\\n          type\\n          __typename\\n        }\\n        nbAllBeds\\n        __typename\\n      }\\n      apartmentRooms {\\n        config {\\n          roomId: id\\n          roomType\\n          bedTypeId\\n          bedCount: count\\n          __typename\\n        }\\n        roomName: tag {\\n          tag\\n          translation\\n          __typename\\n        }\\n        __typename\\n      }\\n      nbAllBeds\\n      nbBathrooms\\n      nbBedrooms\\n      nbKitchens\\n      nbLivingrooms\\n      nbUnits\\n      unitTypeNames {\\n        translation\\n        __typename\\n      }\\n      localizedArea {\\n        localizedArea\\n        unit\\n        __typename\\n      }\\n      unitTypeId\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment PropertyBlocks on SearchResultProperty {\\n  blocks {\\n    blockId {\\n      roomId\\n      occupancy\\n      policyGroupId\\n      packageId\\n      mealPlanId\\n      __typename\\n    }\\n    finalPrice {\\n      amount\\n      currency\\n      __typename\\n    }\\n    originalPrice {\\n      amount\\n      currency\\n      __typename\\n    }\\n    onlyXLeftMessage {\\n      tag\\n      variables {\\n        key\\n        value\\n        __typename\\n      }\\n      translation\\n      __typename\\n    }\\n    freeCancellationUntil\\n    hasCrib\\n    blockMatchTags {\\n      childStaysForFree\\n      __typename\\n    }\\n    thirdPartyInventoryContext {\\n      isTpiBlock\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment PriceDisplayInfoIrene on PriceDisplayInfoIrene {\\n  badges {\\n    name {\\n      translation\\n      __typename\\n    }\\n    tooltip {\\n      translation\\n      __typename\\n    }\\n    style\\n    identifier\\n    __typename\\n  }\\n  chargesInfo {\\n    translation\\n    __typename\\n  }\\n  displayPrice {\\n    copy {\\n      translation\\n      __typename\\n    }\\n    amountPerStay {\\n      amount\\n      amountRounded\\n      amountUnformatted\\n      currency\\n      __typename\\n    }\\n    __typename\\n  }\\n  priceBeforeDiscount {\\n    copy {\\n      translation\\n      __typename\\n    }\\n    amountPerStay {\\n      amount\\n      amountRounded\\n      amountUnformatted\\n      currency\\n      __typename\\n    }\\n    __typename\\n  }\\n  rewards {\\n    rewardsList {\\n      termsAndConditions\\n      amountPerStay {\\n        amount\\n        amountRounded\\n        amountUnformatted\\n        currency\\n        __typename\\n      }\\n      breakdown {\\n        productType\\n        amountPerStay {\\n          amount\\n          amountRounded\\n          amountUnformatted\\n          currency\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    rewardsAggregated {\\n      amountPerStay {\\n        amount\\n        amountRounded\\n        amountUnformatted\\n        currency\\n        __typename\\n      }\\n      copy {\\n        translation\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  useRoundedAmount\\n  discounts {\\n    amount {\\n      amount\\n      amountRounded\\n      amountUnformatted\\n      currency\\n      __typename\\n    }\\n    name {\\n      translation\\n      __typename\\n    }\\n    description {\\n      translation\\n      __typename\\n    }\\n    itemType\\n    productId\\n    __typename\\n  }\\n  excludedCharges {\\n    excludeChargesAggregated {\\n      copy {\\n        translation\\n        __typename\\n      }\\n      amountPerStay {\\n        amount\\n        amountRounded\\n        amountUnformatted\\n        currency\\n        __typename\\n      }\\n      __typename\\n    }\\n    excludeChargesList {\\n      chargeMode\\n      chargeInclusion\\n      chargeType\\n      amountPerStay {\\n        amount\\n        amountRounded\\n        amountUnformatted\\n        currency\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  taxExceptions {\\n    shortDescription {\\n      translation\\n      __typename\\n    }\\n    longDescription {\\n      translation\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment BookerExperienceData on SearchResultProperty {\\n  bookerExperienceContentUIComponentProps {\\n    ... on BookerExperienceContentLoyaltyBadgeListProps {\\n      badges {\\n        variant\\n        key\\n        title\\n        popover\\n        logoSrc\\n        logoAlt\\n        __typename\\n      }\\n      __typename\\n    }\\n    ... on BookerExperienceContentFinancialBadgeProps {\\n      paymentMethod\\n      backgroundColor\\n      hideAccepted\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment SearchMetadata on SearchMeta {\\n  availabilityInfo {\\n    hasLowAvailability\\n    unavailabilityPercent\\n    totalAvailableNotAutoextended\\n    __typename\\n  }\\n  boundingBoxes {\\n    swLat\\n    swLon\\n    neLat\\n    neLon\\n    type\\n    __typename\\n  }\\n  childrenAges\\n  dates {\\n    checkin\\n    checkout\\n    lengthOfStayInDays\\n    __typename\\n  }\\n  destId\\n  destType\\n  guessedLocation {\\n    destId\\n    destType\\n    destName\\n    __typename\\n  }\\n  maxLengthOfStayInDays\\n  nbRooms\\n  nbAdults\\n  nbChildren\\n  userHasSelectedFilters\\n  customerValueStatus\\n  isAffiliateBookingOwned\\n  affiliatePartnerChannelId\\n  affiliateVerticalType\\n  geniusLevel\\n  __typename\\n}\\n\\nfragment SearchResultsBreadcrumb on SearchResultsBreadcrumb {\\n  destId\\n  destType\\n  name\\n  __typename\\n}\\n\\nfragment SorterFields on SorterOption {\\n  type: name\\n  captionTranslationTag {\\n    translation\\n    __typename\\n  }\\n  tooltipTranslationTag {\\n    translation\\n    __typename\\n  }\\n  isSelected: selected\\n  __typename\\n}\\n\\nfragment OneOfThreeDeal on OneOfThreeDeal {\\n  id\\n  uuid\\n  winnerHotelId\\n  winnerBlockId\\n  priceDisplayInfoIrene {\\n    displayPrice {\\n      amountPerStay {\\n        amountRounded\\n        amountUnformatted\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  locationInfo {\\n    name\\n    inName\\n    destType\\n    __typename\\n  }\\n  destinationType\\n  commonFacilities {\\n    id\\n    name\\n    __typename\\n  }\\n  tpiParams {\\n    wholesalerCode\\n    rateKey\\n    rateBlockId\\n    bookingRoomId\\n    supplierId\\n    __typename\\n  }\\n  properties {\\n    priceDisplayInfoIrene {\\n      priceBeforeDiscount {\\n        amountPerStay {\\n          amountRounded\\n          amountUnformatted\\n          __typename\\n        }\\n        __typename\\n      }\\n      displayPrice {\\n        amountPerStay {\\n          amountRounded\\n          amountUnformatted\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    basicPropertyData {\\n      id\\n      name\\n      pageName\\n      photos {\\n        main {\\n          highResUrl {\\n            absoluteUrl\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      location {\\n        address\\n        countryCode\\n        __typename\\n      }\\n      reviews {\\n        reviewsCount\\n        totalScore\\n        __typename\\n      }\\n      __typename\\n    }\\n    blocks {\\n      thirdPartyInventoryContext {\\n        rateBlockId\\n        rateKey\\n        wholesalerCode\\n        tpiRoom {\\n          bookingRoomId\\n          __typename\\n        }\\n        supplierId\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TripTypesData on TripTypes {\\n  beach {\\n    isBeachUfi\\n    isEnabledBeachUfi\\n    __typename\\n  }\\n  ski {\\n    isSkiExperience\\n    isSkiScaleUfi\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ZeroResultsSection on ZeroResultsSection {\\n  title {\\n    text\\n    __typename\\n  }\\n  primaryAction {\\n    text {\\n      text\\n      __typename\\n    }\\n    action {\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  paragraphs {\\n    text\\n    __typename\\n  }\\n  type\\n  __typename\\n}\\n\\nfragment PreviousSearches on PreviousSearch {\\n  childrenAges\\n  __typename\\n}\\n\\nfragment FrontierThemes on FrontierTheme {\\n  id\\n  name\\n  selected\\n  __typename\\n}\\n\\nfragment MerchRegionIrene on MerchComponentsResultIrene {\\n  regions {\\n    id\\n    components {\\n      ... on PromotionalBannerIrene {\\n        promotionalBannerCampaignId\\n        contentArea {\\n          title {\\n            ... on PromotionalBannerSimpleTitleIrene {\\n              value\\n              __typename\\n            }\\n            __typename\\n          }\\n          subTitle {\\n            ... on PromotionalBannerSimpleSubTitleIrene {\\n              value\\n              __typename\\n            }\\n            __typename\\n          }\\n          caption {\\n            ... on PromotionalBannerSimpleCaptionIrene {\\n              value\\n              __typename\\n            }\\n            ... on PromotionalBannerCountdownCaptionIrene {\\n              campaignEnd\\n              __typename\\n            }\\n            __typename\\n          }\\n          buttons {\\n            variant\\n            cta {\\n              ariaLabel\\n              text\\n              targetLanding {\\n                ... on OpenContextSheet {\\n                  sheet {\\n                    ... on WebContextSheet {\\n                      title\\n                      body {\\n                        items {\\n                          ... on ContextSheetTextItem {\\n                            text\\n                            __typename\\n                          }\\n                          ... on ContextSheetList {\\n                            items {\\n                              text\\n                              __typename\\n                            }\\n                            __typename\\n                          }\\n                          __typename\\n                        }\\n                        __typename\\n                      }\\n                      buttons {\\n                        variant\\n                        cta {\\n                          text\\n                          ariaLabel\\n                          targetLanding {\\n                            ... on DirectLinkLanding {\\n                              urlPath\\n                              queryParams {\\n                                name\\n                                value\\n                                __typename\\n                              }\\n                              __typename\\n                            }\\n                            ... on LoginLanding {\\n                              stub\\n                              __typename\\n                            }\\n                            ... on DeeplinkLanding {\\n                              urlPath\\n                              queryParams {\\n                                name\\n                                value\\n                                __typename\\n                              }\\n                              __typename\\n                            }\\n                            ... on ResolvedLinkLanding {\\n                              url\\n                              __typename\\n                            }\\n                            __typename\\n                          }\\n                          __typename\\n                        }\\n                        __typename\\n                      }\\n                      __typename\\n                    }\\n                    __typename\\n                  }\\n                  __typename\\n                }\\n                ... on SearchResultsLandingIrene {\\n                  destType\\n                  destId\\n                  checkin\\n                  checkout\\n                  nrAdults\\n                  nrChildren\\n                  childrenAges\\n                  nrRooms\\n                  filters {\\n                    name\\n                    value\\n                    __typename\\n                  }\\n                  __typename\\n                }\\n                ... on DirectLinkLandingIrene {\\n                  urlPath\\n                  queryParams {\\n                    name\\n                    value\\n                    __typename\\n                  }\\n                  __typename\\n                }\\n                ... on LoginLandingIrene {\\n                  stub\\n                  __typename\\n                }\\n                ... on DeeplinkLandingIrene {\\n                  urlPath\\n                  queryParams {\\n                    name\\n                    value\\n                    __typename\\n                  }\\n                  __typename\\n                }\\n                ... on SorterLandingIrene {\\n                  sorterName\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        designVariant {\\n          ... on DesktopPromotionalFullBleedImageIrene {\\n            image: image {\\n              id\\n              url(width: 814, height: 138)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          ... on DesktopPromotionalImageLeftIrene {\\n            imageOpt: image {\\n              id\\n              url(width: 248, height: 248)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          ... on DesktopPromotionalImageRightIrene {\\n            imageOpt: image {\\n              id\\n              url(width: 248, height: 248)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          ... on MdotPromotionalFullBleedImageIrene {\\n            image: image {\\n              id\\n              url(width: 358, height: 136)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          ... on MdotPromotionalImageLeftIrene {\\n            imageOpt: image {\\n              id\\n              url(width: 128, height: 128)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          ... on MdotPromotionalImageRightIrene {\\n            imageOpt: image {\\n              id\\n              url(width: 128, height: 128)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          ... on MdotPromotionalImageTopIrene {\\n            imageOpt: image {\\n              id\\n              url(width: 128, height: 128)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          ... on MdotPromotionalIllustrationLeftIrene {\\n            imageOpt: image {\\n              id\\n              url(width: 200, height: 200)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          ... on MdotPromotionalIllustrationRightIrene {\\n            imageOpt: image {\\n              id\\n              url(width: 200, height: 200)\\n              alt\\n              overlayGradient\\n              primaryColorHex\\n              __typename\\n            }\\n            colorScheme\\n            signature\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      ... on MerchCarouselIrene @include(if: $carouselLowCodeExp) {\\n        carouselCampaignId\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}}')).API_URL,a=/*@__PURE__*/n(e).API_PAYLOAD,o=async(n,e)=>{try{a.variables.input.location.searchString=n,a.variables.input.pagination.rowsPerPage=e;let o=await fetch(`https://cors-anywhere.herokuapp.com/${t}`,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});return o=await o.json(),o?.data?.searchQueries?.search?.results||[]}catch(n){return console.log(`Error while fetching data from api : ${n}`),[]}},r=(n=[])=>{try{let e=n.map(n=>{if(!n)return;let e=n.basicPropertyData?.id||"",t=n.displayName?.text||"",a=n.basicPropertyData?.pageName||"",o=n?.priceDisplayInfoIrene?.priceBeforeDiscount?.displayPrice?.amountPerStay?.amount||"";return[e,t,a,o].map(n=>`"${n}"`).join(",")});return["Listing ID,Listing Title,Page Name,Amount Per Stay",...e].join("\n")}catch(n){return console.log(`Error while generating CSV: ${n}`),""}},i=async(n,e)=>{try{let t=await o(n,e);return r(t)}catch(n){console.log(`Error in getDataAndGenerateCSVBuffer: ${n}`)}};document.getElementById("downloadExcelButton").addEventListener("click",async function(){let n=new Blob([await i("Bangalore",10)],{type:"text/csv"}),e=document.createElement("a");e.href=URL.createObjectURL(n),e.download="Listings.csv",e.click(),URL.revokeObjectURL(e.href)});
//# sourceMappingURL=index.3f4869bc.js.map
