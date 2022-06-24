import React, { useEffect } from "react";

import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";
import ShowListings from "../components/Listings";
import routes from "../navigation/routes";

const Listings = ({ route }) => {
  const allListings = useApi(listingsApi.getListings);
  const userListings = useApi(listingsApi.getUserListings);

  useEffect(() => {
    if (route.params?.userListings) {
      userListings.request();
    } else {
      allListings.request();
    }
  }, [route.params?.userListings]);

  return route.params?.userListings ? (
    <ShowListings
      data={userListings.data}
      error={userListings.error}
      itemNavigationRoute={routes.USER_LISTING_DETAILS}
      loading={userListings.loading}
      onRefresh={userListings.request}
    />
  ) : (
    <ShowListings
      data={allListings.data}
      error={allListings.error}
      loading={allListings.loading}
      onRefresh={allListings.request}
    />
  );
};

export default Listings;
