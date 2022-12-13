import React from "react";

const Modal = ({setPModal, pModal}) => {
    const {img, name, techno, link} = pModal;
    console.log('pmodal', pModal)
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-[#0f1316] max-w-4xl rounded-none">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-white font-bold">
            {name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi labore dolores perspiciatis, facere excepturi beatae suscipit doloribus distinctio iusto cum eum velit eligendi, quibusdam dignissimos porro maxime voluptatem. Temporibus expedita dolores cum iusto reiciendis reprehenderit? Dolor, necessitatibus. Fugit quae molestiae repudiandae laudantium provident distinctio quam, autem ullam consequatur temporibus quisquam dolore maiores fugiat natus itaque delectus quod! Ipsam provident quod eum debitis voluptates delectus error rem natus quasi, at molestias ad sequi non officia distinctio! Aspernatur, quam amet neque mollitia illum corporis in! A odio dignissimos unde architecto pariatur neque repudiandae ad accusantium quas eaque voluptate possimus ipsam dolorum ratione, molestiae soluta fuga velit voluptas? Laboriosam esse dignissimos, ipsam deserunt quod ad incidunt praesentium consectetur earum porro culpa nobis iure reprehenderit explicabo, debitis dolor dolorem ipsum tempora id expedita. Nostrum inventore corporis necessitatibus ea, voluptas dicta et sit nam, nulla deleniti porro amet, eligendi exercitationem sunt tempora mollitia? Necessitatibus quis, doloremque officia repellendus cumque, incidunt numquam facere possimus eaque laborum rem debitis, aperiam pariatur eum. Eum, aspernatur placeat alias vel, quibusdam explicabo iusto voluptate, totam dolorum neque fugit? Aliquam inventore veritatis adipisci vel officiis? Maxime id culpa esse? Itaque ut rem explicabo? Quaerat commodi accusantium et est a voluptates incidunt assumenda hic laborum vero corporis quidem ad sed animi voluptatibus amet eum error, non quae omnis odit illum. Laudantium eum labore doloremque vero excepturi eos incidunt eius inventore totam veniam corporis reiciendis sit non voluptatem corrupti magni dicta odio voluptatum ipsum impedit, adipisci qui officia atque ea? Placeat, molestias expedita sapiente, eligendi minima earum quod qui, laudantium corporis dolores dolorem nostrum. Aut quos, explicabo in quasi quibusdam molestiae quis voluptatem voluptates deleniti, corporis voluptatibus beatae debitis hic officia dolores ad placeat rerum vero vitae excepturi. Mollitia officia sequi nostrum accusamus beatae, magni, minus ab et quia error assumenda amet nobis autem magnam tenetur praesentium qui nam velit vitae fugiat distinctio culpa iusto! Quaerat dolorum sunt, commodi deserunt corporis soluta! Beatae at, minima ad cumque hic quas, soluta repellendus doloribus laudantium, quasi alias distinctio veniam labore dolore unde a reiciendis tenetur modi! Iste iusto laboriosam quos culpa explicabo asperiores unde nobis repudiandae dolor illum doloremque reiciendis, quaerat voluptates. Quidem omnis voluptate impedit harum aliquam maiores necessitatibus, eius dolore provident molestiae amet reiciendis sit neque asperiores, est natus doloremque numquam dolor earum recusandae qui. Voluptas officia corrupti sit dolor aspernatur rem obcaecati nostrum explicabo, adipisci nihil optio. Vitae optio a laudantium.</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
