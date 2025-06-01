//Time to mow the yard.	2000
//Time to weed eat the yard.	1500
//Time to trim the hedges.	1000
//Time to collect wood.	2500
//Time to water the garden.	500

function mowYard(name, callback)
{
    console.log(`${name} mowed the yard.`);

    setTimeout(weedEat, 1500, name, callback);
}

function weedEat(name, callback)
{
    if (hasFallenAsleep(10))
    {
        console.log(`${name} fell asleep after mowing the yard.`);
        return;
    }

    console.log(`${name} finished using the weed eater.`);
    setTimeout(trimHedges, 1000, name, callback);
}

function trimHedges(name, callback)
{
    if (hasFallenAsleep(20))
    {
        console.log(`${name} fell asleep after weed eating the yard.`);
        return;
    }

    console.log(`${name} finished trimming the hedges.`);
    setTimeout(collectWood, 2500, name, callback);
}

function collectWood(name, callback)
{
    if (hasFallenAsleep(30))
    {
        console.log(`${name} fell asleep after trimming the hedges.`);
        return;
    }

    console.log(`${name} finished collecting wood.`);
    setTimeout(waterGarden, 500, name, callback );
}

function waterGarden(name, callback)
{
    if (hasFallenAsleep(40))
    {
        console.log(`${name} fell asleep after collecting wood.`);
        return;
    }

    console.log(`${name} finished watering the garden.`);
    callback();
}


function doSummerChores(name)
{
    console.log("started chores");
    setTimeout
    (
        mowYard,
        2000,
        name,
        () => console.log(`${name} finished all their chores!`)
    );
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

doSummerChores("Bob");