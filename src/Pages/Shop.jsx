import Hero from "../Components/Hero";
import NewCollections from "../Components/NewCollections";
import Offers from "../Components/Offers";
import Popular from "../Components/Popular";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
}
