import { useState } from "react";
// import styles from "./StateChange2.module.css";
function StateChange2() {
  const [theme, setTheme] = useState({
    dtColor: "thistle",
    ddColor: "blanchedalmond",
  });
  function changeTheme() {
    setTheme({ dtColor: "lightblue", ddColor: "lightgreen" });
  }

  //   const theme = { color: color, backgroundColor: "gray" };
  return (
    <>
      <h1>Change Theme</h1>
      <button onClick={changeTheme}>DarkTheme</button>
      <button
        onClick={() => {
          setTheme({ dtColor: "thistle", ddColor: "blanchedalmond" });
        }}
      >
        Reset
      </button>
      <div>
        <dl>
          <dt style={{ backgroundColor: theme.dtColor }}>HTML</dt>
          <dd style={{ backgroundColor: theme.ddColor }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae aut nobis est provident quo. Unde quia voluptate at ab
            vel deleniti laborum molestiae delectus. Obcaecati laudantium
            architecto vero et harum accusantium ab, quos ut modi illo nam quae
            laboriosam suscipit ex assumenda a illum sunt repellendus aliquid
            voluptates minus aspernatur? Ab nemo quae quod, error nesciunt
            libero provident commodi autem vitae, exercitationem odit laboriosam
            non iure maxime et beatae dolorem eligendi neque inventore fugiat
            quis. At eum veniam modi obcaecati atque tempore et iusto? Doloribus
            libero odio nihil porro in quae quidem, nostrum labore maxime sunt
            deleniti illum sed harum cum tempora quos est numquam! Ab nulla
            voluptate, quo nesciunt iste aut officia, animi architecto aliquid
            est minus natus consequatur consequuntur blanditiis rem tenetur
            corporis ipsum ipsam impedit deleniti, iure eveniet. Vel tenetur
            unde laudantium, consequuntur quidem expedita. Ea accusamus
            blanditiis laudantium labore rem assumenda perspiciatis maiores,
            placeat recusandae a quia id totam rerum! Doloribus accusamus
            nostrum velit eligendi exercitationem repellendus ab, commodi,
            placeat totam qui dolorum quia alias dignissimos nobis praesentium
            quidem saepe beatae. Nobis quos fugiat debitis itaque. Unde in quis
            modi omnis, eligendi eum necessitatibus placeat expedita dicta
            beatae, consequatur veritatis dolorem ratione aspernatur officiis,
            vel fugiat.
          </dd>
          <dt style={{ backgroundColor: theme.dtColor }}>CSS</dt>
          <dd style={{ backgroundColor: theme.ddColor }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem
            incidunt provident. Accusantium quaerat facilis rerum animi ea
            dolores porro, doloremque eos fuga nisi, quam et, eligendi esse
            dolore saepe atque deserunt commodi sequi quidem corporis placeat
            itaque. Molestiae reiciendis dolor dolorum ut exercitationem totam
            dolore minus sequi. Porro, eius sequi repudiandae sint vel
            repellendus minus non laborum adipisci itaque rerum doloribus iste
            voluptatum architecto voluptatem quibusdam ad tempore magni? Fugiat
            quo et amet alias mollitia quaerat nam non nulla incidunt,
            aspernatur iste laudantium exercitationem odio illo ipsa asperiores
            quis vero eaque, nobis minus saepe, esse officiis eos! Eos
            dignissimos fuga voluptatum! Id placeat eius asperiores voluptate
            veritatis est suscipit maiores perferendis sit esse exercitationem
            modi voluptatum debitis, reiciendis repudiandae iusto commodi
            similique nisi dicta vel! Quos veniam ex voluptatem, eum in itaque
            totam assumenda modi inventore! Ipsum maiores tenetur aut, id
            inventore at dicta ad! Necessitatibus, delectus rerum. Numquam.
          </dd>
          <dt style={{ backgroundColor: theme.dtColor }}>Java</dt>
          <dd style={{ backgroundColor: theme.ddColor }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            rem consequuntur consequatur ipsam, doloremque inventore esse
            nesciunt vitae, quia iure consectetur repellendus obcaecati!
            Officiis beatae, similique corporis illum nulla molestias libero
            aspernatur ipsa doloribus ullam quibusdam laboriosam? Pariatur
            explicabo necessitatibus iste adipisci eligendi, reiciendis, fuga
            repellendus nisi dolores repellat et voluptatibus molestiae sit ab
            ducimus veritatis quo, optio odit temporibus soluta? Optio
            consectetur quaerat repellat iusto, fugit, laudantium soluta impedit
            corrupti dignissimos magnam exercitationem quasi nihil architecto
            accusantium quam numquam sequi unde tenetur minus repudiandae.
            Fugit, incidunt corrupti excepturi cum suscipit quas optio
            reprehenderit harum commodi magnam quod magni sed libero quaerat.
            Temporibus nisi quos asperiores voluptate dicta eos assumenda magni
            sapiente velit illum. Nostrum perspiciatis eos est quasi repellendus
            vitae adipisci doloremque dolores ducimus recusandae quis veniam
            magnam, quibusdam exercitationem iusto tempore deserunt esse ex
            amet. Blanditiis quaerat minus totam iste dignissimos illo beatae
            delectus odit? Expedita asperiores ipsum similique ducimus ea, quis
            tempora ratione, neque temporibus at voluptatum hic facilis vitae
            voluptate mollitia illum ex. Deserunt rerum harum placeat qui unde
            soluta nulla explicabo id inventore, nisi reprehenderit nobis eius
            quas? Amet dolores asperiores quo numquam sapiente modi quia,
            molestiae temporibus accusantium excepturi error, velit non
            similique magnam, deleniti adipisci veniam obcaecati. Nemo maiores
            quod ex. Minima nostrum, dolorem corrupti obcaecati fugiat
            repudiandae quis tempore nobis commodi illum placeat expedita enim
            natus odio autem magnam impedit aperiam porro accusantium accusamus?
            Reprehenderit corrupti fugiat recusandae odit earum vitae autem ut,
            vero ratione fuga labore distinctio maxime voluptate perspiciatis
            provident magni eius architecto! Sequi quis facere necessitatibus ad
            nulla aperiam tenetur quidem quos, nisi eveniet voluptatum mollitia
            recusandae eius nobis adipisci? Quisquam, sint, delectus sit atque
            exercitationem assumenda rem ea mollitia sequi labore pariatur
            ducimus distinctio numquam quos quaerat vel magni ex, ad repellat
            ab! Quis corporis cupiditate quaerat similique.
          </dd>
        </dl>
      </div>
    </>
  );
}
export default StateChange2;
