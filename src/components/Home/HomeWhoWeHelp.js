import React, {useState} from 'react';
import '../../scss/HomeWhoWeHelp.scss';
import HomeTitle from './HomeTitle';
import HomeTableRecords from './HomeTableRecords';
import HomeTablePagination from './HomeTablePagination';

const HomeWhoWeHelp = ({id}) => {
  const foundationList = [
    {name: "Fundacja “Dbam o Zdrowie”", mission: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"},
    {name: "Fundacja “Dla dzieci”", mission: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", needs: "ubrania, meble, zabawki"},
    {name: "Fundacja “Bez domu”", mission: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", needs: "ubrania, jedzenie, ciepłe koce"},
    {name: "Fundacja “Lorem Ipsum 4”", mission: "Dolor sit amet, consectetur adipiscing elit", needs: "sed do, eiusmod, tempor"},
    {name: "Fundacja “Lorem Ipsum 5”", mission: "Incididunt ut labore et dolore magna aliqua", needs: "Ut enim, ad minim, veniam"},
    {name: "Fundacja “Lorem Ipsum 6”", mission: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", needs: "duis, aute, irure, dolor"},
    {name: "Fundacja “Lorem Ipsum 7”", mission: "In reprehenderit in voluptate velit esse cillum dolore", needs: "eu fugiat nulla pariatur"},
    {name: "Fundacja “Lorem Ipsum 8”", mission: "Excepteur sint occaecat cupidatat non proident", needs: "sunt, in culpa, qui officia"},
    {name: "Fundacja “Lorem Ipsum 9”", mission: "Deserunt mollit anim id est laborum", needs: "Sed, ut perspiciatis, unde, omnis"}
  ];

  const ngoList = [
    {name: "Organizacja “Lorem Ipsum 1”", mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.", needs: "Egestas, sed, tempus"},
    {name: "Organizacja “Lorem Ipsum 2”", mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", needs: "Ut, aliquam, purus, sit, amet"},
    {name: "Organizacja “Lorem Ipsum 3”", mission: "Scelerisque in dictum non consectetur a erat nam.", needs: "Mi, quis, hendrerit, dolor"},
    {name: "Organizacja “Lorem Ipsum 4”", mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.", needs: "Egestas, sed, tempus"},
    {name: "Organizacja “Lorem Ipsum 5”", mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", needs: "Ut, aliquam, purus, sit, amet"},
    {name: "Organizacja “Lorem Ipsum 6”", mission: "Scelerisque in dictum non consectetur a erat nam.", needs: "Mi, quis, hendrerit, dolor"},
  ]

  const localList = [
    {name: "Lokalna zbiórka “Lorem Ipsum 1”", mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.", needs: "Egestas, sed, tempus"},
    {name: "Lokalna zbiórka “Lorem Ipsum 2”", mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", needs: "Ut, aliquam, purus, sit, amet"},
    {name: "Lokalna zbiórka “Lorem Ipsum 3”", mission: "Scelerisque in dictum non consectetur a erat nam.", needs: "Mi, quis, hendrerit, dolor"},
  ]

  const [type, setType] = useState("foundations");
  const [records, setRecords] = useState(foundationList)

  const handleFoundations = () => {
    setType("foundations");
    setRecords(foundationList);
    setCurrentPage(1);
  }

  const handleNgos = () => {
    setType("ngos");
    setRecords(ngoList);
    setCurrentPage(1);
  }

  const handleLocal = () => {
    setType("local");
    setRecords(localList);
    setCurrentPage(1);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className="whowehelp" id={id}>
      <HomeTitle title={"Komu pomagamy?"}/>
      <div className="whowehelp__buttons">
        <button className="whowehelp__button" onClick={handleFoundations} style={{border: type==="foundations" && "0.75px solid #3c3c3c"}}>Fundacjom</button>
        <button className="whowehelp__button" onClick={handleNgos} style={{border: type==="ngos" && "0.75px solid #3c3c3c"}}>Organizacjom <br/> pozarządowym</button>
        <button className="whowehelp__button" onClick={handleLocal} style={{border: type==="local" && "0.75px solid #3c3c3c"}}>Lokalnym <br/> zbiórkom</button>
      </div>
      {type==="foundations" && <p className="whowehelp__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>}
      {type==="ngos" && <p className="whowehelp__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>}
      {type==="local" && <p className="whowehelp__text">Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>}
      <table className="whowehelp__table">
        <tbody>
          <HomeTableRecords records={currentRecords} />
        </tbody>
      </table>
      <HomeTablePagination 
        recordsPerPage={recordsPerPage}
        totalRecords={records.length}
        paginate={paginate} 
        activeNumber={currentPage}
      />
    </section>
  )
}

export default HomeWhoWeHelp;