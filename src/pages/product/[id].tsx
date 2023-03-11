import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          numquam nam at corrupti porro molestias ratione vero eos, maxime, ut
          obcaecati delectus expedita velit pariatur illum! Consequuntur atque
          deserunt minus!
        </p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
