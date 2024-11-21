import {Container, Filters, Title, TopBar} from "@/components/shared";
import {ProductCard} from "@/components/shared/product-card";
import {ProductsGroupList} from "@/components/shared/products-group-list";


export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="All products" className="font-extrabold"/>
            </Container>
            <TopBar/>
            <Container className="mt-10 pb-15">
                <div className="flex gap-[60px]">

                    {/*filter*/}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>

                    {/*product-list*/}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                           <ProductsGroupList title="Піца"
                                              items={[
                                                  {
                                                      id: 1,
                                                      name: "ГАВАЙСЬКА",
                                                      imgUrl: "https://cdn-media.choiceqr.com/prod-eat-storypizza/menu/kcTbgwq-qFNJrQZ-DCuziTM.webp",
                                                      price: 169,
                                                      items: [{price: 169}]
                                                  },
                                                  {
                                                      id: 2,
                                                      name: "ГАВАЙСЬКА",
                                                      imgUrl: "https://cdn-media.choiceqr.com/prod-eat-storypizza/menu/Lyphywb-FGZTJZD-tMAGSie.webp",
                                                      price: 169,
                                                      items: [{price: 169}]
                                                  },

                                                  {
                                                      id: 3,
                                                      name: "ГАВАЙСЬКА",
                                                      imgUrl: "https://cdn-media.choiceqr.com/prod-eat-storypizza/menu/GJlFtXV-hYuGrnN-JCDDjnB.webp",
                                                      price: 169,
                                                      items: [{price: 169}]
                                                  },
                                              ]}
                                              categoryId={1}
                           />
                            <ProductsGroupList title="Снеки"
                                               items={[
                                                   {
                                                       id: 1,
                                                       name: "ГАВАЙСЬКА",
                                                       imgUrl: "https://cdn-media.choiceqr.com/prod-eat-storypizza/menu/kcTbgwq-qFNJrQZ-DCuziTM.webp",
                                                       price: 169,
                                                       items: [{price: 169}]
                                                   },
                                                   {
                                                       id: 2,
                                                       name: "ГАВАЙСЬКА",
                                                       imgUrl: "https://cdn-media.choiceqr.com/prod-eat-storypizza/menu/Lyphywb-FGZTJZD-tMAGSie.webp",
                                                       price: 169,
                                                       items: [{price: 169}]
                                                   },

                                                   {
                                                       id: 3,
                                                       name: "ГАВАЙСЬКА",
                                                       imgUrl: "https://cdn-media.choiceqr.com/prod-eat-storypizza/menu/GJlFtXV-hYuGrnN-JCDDjnB.webp",
                                                       price: 169,
                                                       items: [{price: 169}]
                                                   },
                                               ]}
                                               categoryId={2}
                            />
                        </div>
                    </div>
                </div>


            </Container>
        </>
    );
}
