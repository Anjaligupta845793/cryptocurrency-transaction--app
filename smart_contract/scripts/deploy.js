const main = async () => {
  /* const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address); */
  const transactionsFactory = await hre.ethers.getContractFactory("Crowdfunding");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
  await transactionsContract.CreatCampign("anjali","it's for nature",22,0)
  const getcampign = await transactionsContract.getCampigns();
  console.log(getcampign);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();