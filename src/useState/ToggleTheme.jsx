import React, { useState } from "react";
import styles from "./ThemeToggle.module.css";
const ToggleTheme = () => {
  const [theme, setTheme] = useState("light_theme");
  return (
    <>
      <h3>{theme}Toggle Theme</h3>
      <button
        onClick={() => {
          setTheme((prev) =>
            prev == "light_theme" ? "dark_theme" : "light_theme"
          );
        }}
      >
        ChangeTheme
      </button>
      <div>
        <dl className={styles[theme]}>
          <dt>React</dt>
          <dd>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur soluta, architecto tenetur reiciendis velit quo vitae,
            nihil vero, rem tempore provident saepe. Esse repudiandae unde
            perspiciatis impedit doloribus! Repellat voluptate, aperiam
            accusantium debitis iusto rem, maxime enim placeat officiis neque
            fugit. Velit rerum obcaecati itaque tempora aperiam cumque dolorem
            quia est fugiat, tempore praesentium corporis eveniet perspiciatis
            molestiae quas libero optio sit ab delectus quam. Exercitationem
            sapiente assumenda doloremque ipsam officiis laboriosam, numquam
            totam sequi neque ullam quas, reiciendis ad non quidem repudiandae
            hic at quisquam beatae ipsa aspernatur aperiam doloribus voluptate
            laborum facilis. Adipisci dolor nihil veritatis nulla. Architecto
            obcaecati reprehenderit odit ad consequuntur aliquid deserunt
            temporibus sapiente velit esse animi et, reiciendis dolorum,
            suscipit consequatur veniam iste explicabo nihil incidunt eos? Iste,
            officia debitis! Quae tempora ipsam, illo eum quo dicta odio tempore
            laborum debitis pariatur aperiam natus tenetur, fugit quasi, quas
            quisquam. Odio debitis neque, repudiandae aperiam libero dolor enim
            cumque delectus. Ea laudantium ratione repellat molestiae assumenda
            similique officia amet cupiditate expedita tempore deserunt vitae
            dolore dolorum atque temporibus labore maiores non magnam, fugit
            doloremque saepe vel illo architecto porro. Explicabo debitis
            reiciendis labore! Repellat iure laudantium, voluptates ad veniam
            repudiandae error accusamus placeat beatae delectus!
          </dd>
          <dt>Flutter</dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            ad, iusto quae ipsam voluptatibus animi reiciendis possimus iure
            odit accusantium dolore sit a excepturi natus beatae corrupti ex eum
            pariatur doloribus consectetur. Neque cum quasi odio obcaecati
            deserunt deleniti. Quas odio facilis laborum sed nihil voluptatum
            ipsam magnam sit, voluptatem earum quasi iste non fugit laudantium
            minus, eius ipsum eligendi inventore obcaecati laboriosam nostrum
            adipisci vel harum. Saepe, eum repellendus asperiores debitis rerum
            id, vitae est quis officia officiis voluptate omnis inventore
            distinctio blanditiis consequatur optio doloribus reiciendis ratione
            consectetur. Tempore, facere! Consectetur nam omnis vitae deserunt
            ex quis excepturi cupiditate odit, nisi debitis molestias nostrum,
            provident ea dolores sed consequuntur dignissimos! Molestias
            cupiditate in eligendi enim? Dolore, voluptatum placeat?
          </dd>
          <dt>Angular</dt>
          <dd>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            perspiciatis repellat rem alias asperiores natus iure explicabo
            aliquid magni officiis aperiam reprehenderit voluptates voluptatem
            sit reiciendis voluptate sapiente porro rerum temporibus, tempora
            dolores eum nesciunt laboriosam. Hic, officia harum esse corrupti
            sint assumenda ipsam exercitationem deleniti ratione culpa eos
            veritatis consequuntur reiciendis molestiae atque aspernatur
            voluptate beatae nesciunt, quasi, accusantium doloribus accusamus
            molestias! Est iusto magnam amet nobis reiciendis doloribus quo
            mollitia aspernatur ullam! Libero, sequi eum ipsum dolores
            exercitationem magni fugiat esse aliquid sapiente ad, voluptate ipsa
            pariatur, nobis voluptatem veniam. Vel expedita reprehenderit eos
            corporis officiis minus exercitationem vitae perferendis
            dignissimos, error tenetur veniam facere nulla voluptas inventore ut
            consequuntur excepturi alias quia aspernatur iste ducimus sed! Alias
            ex consectetur quod aspernatur possimus cumque mollitia molestiae,
            qui quas? Quos consectetur reprehenderit consequatur nam enim
            voluptatem sunt odio, qui, aliquid voluptate esse sequi ipsam veniam
            rem? Porro iusto incidunt tenetur nihil, ipsa fugit. Voluptatum
            corporis culpa natus iste consequatur fugiat, id eveniet vero. Quia
            nostrum odit, incidunt, eaque unde laborum blanditiis consequatur
            optio reiciendis maxime dolores nulla. Obcaecati tempore ab libero,
            ut corrupti dicta doloremque iusto explicabo quia quaerat dolorem,
            error, sed unde omnis vel neque ratione nulla quas similique
            voluptatum voluptatibus distinctio dolore! Quae, accusantium
            mollitia. Fugiat in, vel provident perspiciatis tempore magni
            doloribus veritatis fuga quia fugit enim. Amet, quidem nesciunt
            ratione animi harum quo tempore odit cumque molestiae soluta in
            adipisci minima. Deserunt autem nihil eos. Aspernatur ad et ducimus
            sunt officiis reprehenderit fugiat odio possimus sint laboriosam
            explicabo aut aperiam obcaecati, magni accusamus ullam dolorum
            deserunt amet ipsa, veritatis quas, reiciendis voluptate! Aperiam
            minima fugiat excepturi, molestias, hic beatae accusamus blanditiis
            natus at esse est nobis quasi facere deleniti quis eum, ipsum maxime
            harum quod eveniet quae similique quos recusandae atque. Tenetur
            amet, ea reiciendis numquam similique illum neque dolor asperiores
            architecto. Officiis, harum amet! Itaque architecto consequuntur sit
            sunt ab soluta cum, rem perferendis? Vitae, optio! Illo error
            laudantium at placeat earum accusamus rerum reprehenderit modi nemo
            sequi deserunt amet, quis incidunt ullam quas aperiam dolorum nisi
            non libero? Adipisci vitae perspiciatis accusantium dolores? Quam ad
            exercitationem adipisci expedita eligendi! Natus accusamus sed enim
            aperiam consectetur odio hic voluptatem, delectus facere excepturi
            atque nesciunt earum labore temporibus. Aperiam odio, omnis quas
            odit in modi possimus similique iste, illo quis architecto eveniet
            ad consequatur rem reprehenderit fugiat reiciendis. Dolorem
            temporibus distinctio nam dolores officia delectus.
          </dd>
        </dl>
      </div>
    </>
  );
};

export default ToggleTheme;
