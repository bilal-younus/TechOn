function calculate(requiredBottles, prices, pieces) {
    let bottles = 0;
    let packs = 0;
    let boxes = 0;
    let price = 0;
  
    // First, check if the required number of bottles is greater than 0
    if (requiredBottles > 0) {
      // Calculate the total number of bottles in a box
      const bottlesInBox = pieces[2];
      // Calculate the total number of bottles in a pack
      const bottlesInPack = pieces[1];
      // Calculate the price per bottle in a pack
      const packPricePerBottle = prices[1] / bottlesInPack;
      // Calculate the price per bottle in a box
      const boxPricePerBottle = prices[2] / bottlesInBox;
  
      // Check if buying in bulk boxes is cheaper
      if (boxPricePerBottle < packPricePerBottle) {
        // Calculate the total number of bottles in the required number of boxes
        const bottlesInRequiredBoxes = requiredBottles - (requiredBottles % bottlesInBox);
        boxes = bottlesInRequiredBoxes / bottlesInBox;
        // Calculate the remaining number of bottles required after buying boxes
        const remainingBottles = requiredBottles % bottlesInBox;
        // Check if buying in packs is cheaper
        if (remainingBottles >= bottlesInPack && prices[1] < prices[0] * remainingBottles) {
          // Calculate the total number of bottles in the required number of packs
          const bottlesInRequiredPacks = remainingBottles - (remainingBottles % bottlesInPack);
          packs = bottlesInRequiredPacks / bottlesInPack;
          // Calculate the remaining number of bottles required after buying packs
          bottles = remainingBottles % bottlesInPack;
          // Calculate the total price
          price = boxes * prices[2] + packs * prices[1] + bottles * prices[0];
        } else {
          // If buying in packs is not cheaper, buy individual bottles
          bottles = remainingBottles;
          // Calculate the total price
          price = boxes * prices[2] + bottles * prices[0];
        }
      } else {
        // If buying in packs is cheaper
        if (requiredBottles >= bottlesInPack && prices[1] < prices[0] * requiredBottles) {
          // Calculate the total number of bottles in the required number of packs
          const bottlesInRequiredPacks = requiredBottles - (requiredBottles % bottlesInPack);
          packs = bottlesInRequiredPacks / bottlesInPack;
          // Calculate the remaining number of bottles required after buying packs
          bottles = requiredBottles % bottlesInPack;
          // Calculate the total price
          price = packs * prices[1] + bottles * prices[0];
        } else {
          // If buying in packs is not cheaper, buy individual bottles
          bottles = requiredBottles;
          // Calculate the total price
          price = bottles * prices[0];
        }
      }
    }
  
    // Return the result as an object
    return {
      bottles,
      packs,
      boxes,
      price
    };
  }

  console.log(11,[2.3,25,230],[1,12,12*10])