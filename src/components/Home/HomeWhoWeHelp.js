import React from 'react';
import '../../scss/HomeWhoWeHelp.scss';
import HomeTitle from './HomeTitle';

const HomeWhoWeHelp = ({id}) => {
  return (
    <section className="whowehelp" id={id}>
      <HomeTitle title={"Komu pomagamy?"}/>
      <div className="whowehelp__buttons">
        <button className="whowehelp__button foundation active">Fundacjom</button>
        <button className="whowehelp__button">Organizacjom <br/> pozarządowym</button>
        <button className="whowehelp__button">Lokalnym <br/> zbiórkom</button>
      </div>
      <p className="whowehelp__text foundation">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
      <table className="whowehelp__table">
        <tbody>
          <tr>
            <td><span>Fundacja “Dbam o Zdrowie”</span> <br/> Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</td>
            <td>ubrania, jedzenie, sprzęt AGD, meble, zabawki</td>
          </tr>
          <tr>
            <td><span>Fundacja “Dla dzieci”</span> <br/> Cel i misja: Pomoc dzieciom z ubogich rodzin.</td>
            <td>ubrania, meble, zabawki</td>
          </tr>
          <tr>
            <td><span>Fundacja “Bez domu”</span> <br/> Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</td>
            <td>ubrania, jedzenie, ciepłe koce</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default HomeWhoWeHelp;