//Generate a unique string
export function unique()
{
  //Return a unique string
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
}
