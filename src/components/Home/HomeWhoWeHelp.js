import React from 'react';
import '../../scss/HomeWhoWeHelp.scss';
import HomeTitle from './HomeTitle';

const HomeWhoWeHelp = ({id}) => {
  return (
    <section className="whowehelp" id={id}>
      <HomeTitle title={"Komu pomagamy?"}/>
      <div className="whowehelp__buttons">
        <button className="whowehelp__button foundation">Fundacjom</button>
        <button className="whowehelp__button">Organizacjom <br/> pozarządowym</button>
        <button className="whowehelp__button">Lokalnym <br/> zbiórkom</button>
      </div>
      <p className="whowehelp__text foundation">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
      <table>
        <tbody>
          <tr>
            <td>Fundacja “Dbam o Zdrowie” <br/> Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default HomeWhoWeHelp;