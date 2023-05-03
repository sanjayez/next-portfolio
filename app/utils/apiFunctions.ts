import supabaseAdmin from "./supabaseAdmin";
export const getPhotos = async () => {
  const { data, error } = await supabaseAdmin.from("portfolio-data").select();

  if (error) throw new Error(error.message);

  return data;
};

export const getProjects = async () => {
  const { data, error } = await supabaseAdmin.from("portfolio-urls").select();

  if (error) throw new Error(error.message);

  return data;
};

export const getResume = async () => {
  const { data, error } = await supabaseAdmin.from("resume").select();

  if (error) throw new Error(error.message);

  return data;
};
