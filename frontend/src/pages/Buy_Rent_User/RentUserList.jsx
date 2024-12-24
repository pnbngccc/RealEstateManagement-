import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/Hero/SearchBar";
import HeaderAdmin from "../HomepageAdmin/components/Header/HeaderAdmin";
import PropertyList from "../Properties/component/Properties/Properties";

function RentUserList() {
  return (
    <>
      <HeaderAdmin />
      <SearchBar />
      <PropertyList />
      <Footer></Footer>
    </>
  );
}

export default RentUserList;
