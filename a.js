import { useRouter } from "next/router";

export default function Favorites() {
  const router = useRouter();
  const {
    query: { obj, a },
  } = router;

  const props = {
    obj,
    a,
  };
  console.log(props.a);
  console.log(props.obj);
  return (
    <div>
      <h1>Recipe</h1>
    </div>
  );
}
