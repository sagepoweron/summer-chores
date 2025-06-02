//Time to mow the yard.	2000
//Time to weed eat the yard.	1500
//Time to trim the hedges.	1000
//Time to collect wood.	2500
//Time to water the garden.	500

function mowYard(name, callback)
{
    setTimeout(() =>
    {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);
}

function weedEat(name, callback)
{
    setTimeout(() =>
    {
        if (hasFallenAsleep(10))
        {
            console.log(`${name} fell asleep after mowing the yard.`);
            return;
        }

        console.log(`${name} finished using the weed eater.`);
        callback();
    }, 1500);
}

function trimHedges(name, callback)
{
    setTimeout(() =>
    {
        if (hasFallenAsleep(20))
        {
            console.log(`${name} fell asleep after weed eating the yard.`);
            return;
        }
        
        console.log(`${name} finished trimming the hedges.`);
        callback();
    }, 1000);
    
    setTimeout(collectWood, 2500, name, callback);
}

function collectWood(name, callback)
{
    setTimeout(() =>
    {
        if (hasFallenAsleep(30))
        {
            console.log(`${name} fell asleep after trimming the hedges.`);
            return;
        }
        console.log(`${name} finished collecting wood.`);
        callback();
    }, 2500);
}

function waterGarden(name, callback)
{
    setTimeout(() =>
    {
        if (hasFallenAsleep(40))
        {
            console.log(`${name} fell asleep after collecting wood.`);
            return;
        }
        console.log(`${name} finished watering the garden.`);
        callback();
    }, 500);
    
}


function doSummerChores(name)
{
    console.log("started chores");

    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    })
                })
            });
        });
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

doSummerChores("Bob");