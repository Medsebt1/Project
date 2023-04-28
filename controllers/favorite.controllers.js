exports.createFavorite = async (req, res) => {
  const { FavoriteItems } = req.body;
  try {
    const newFavorite = new Favorite({
      FavoriteItems,
    });

    await newFavorite.save();
    newFavorite
      ? res.status(200).json(newFavorite)
      : res.status(401).json({ msg: "create cart error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
