export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 7000));
  return <div>500 comments</div>;
}
