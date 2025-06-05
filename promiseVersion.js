//Time to mow the yard.	2000
//Time to weed eat the yard.	1500
//Time to trim the hedges.	1000
//Time to collect wood.	2500
//Time to water the garden.	500

function mowYard(name)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            resolve(`${name} mowed the yard.`);
        }, 2000);
    });
}

function weedEat(name)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if (hasFallenAsleep(10))
            {
                reject(`${name} fell asleep after mowing the yard.`);
            }
            else
            {
                resolve(`${name} finished using the weed eater.`);
            }
        }, 1500);
    });
}

function trimHedges(name)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if (hasFallenAsleep(20))
            {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
            else
            {
                resolve(`${name} finished trimming the hedges.`);
            }
        }, 1000);
    });
}

function collectWood(name)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if (hasFallenAsleep(30))
            {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
            else
            {
                resolve(`${name} finished collecting wood.`);
            }
        }, 2500);
    });
}

function waterGarden(name)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if (hasFallenAsleep(40))
            {
                reject(`${name} fell asleep after collecting wood.`);
            }
            else
            {
                resolve(`${name} finished watering the garden.`);
            }
        }, 500);
    });
}

function hasFallenAsleep(chance)
{
    const randomPercentage = Math.random() * 100;
    if (chance > randomPercentage)
    {
        return true;
    }
    return false;
}



function doSummerChores(name)
{
    console.log("started chores");

    mowYard(name)
    .then(value =>
    {
        console.log(value);
        return weedEat(name);
    })
    .then(value =>
    {
        console.log(value);
        return trimHedges(name);
    })
    .then(value =>
    {
        console.log(value);
        return collectWood(name);
    })
    .then(value =>
    {
        console.log(value);
        return waterGarden(name);
    }
    )
    .then(value =>
    {
        console.log(value);
        console.log(`${name} finished all their chores!`);
    })
    .catch(error =>
    {
        console.error(error);
    }
    );
}

doSummerChores("Bob");