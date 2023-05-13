const initialData={
      cars:[]
}

export const carsReducer = (state=initialData,action)=>{
      switch(action.type){
            case 'GET_ALL_CARS':{
                  return{
                        ...state,
                        cars : action.payload
                  }
            }
            default: return state
      }
}

// {
//       model: "Mazda CX3",
//       engine: "2.0-liter I-4 with 146 hp",
//       blurb: "Serving as the brand’s entry-level crossover, the 2018 Mazda CX-3 slots below the larger CX-5. Front-wheel drive is standard on all trims and all-wheel drive is optional.",
//       picture: "/img/cx3.jpg"
//     },
//     {
//       model: "Honda HRV",
//       engine: "1.8-liter I-4 with 141 hp",
//       blurb: "A new entry into the growing subcompact crossover segment, the Honda HR-V is practical and spacious. With seating for up to five passengers and multiple seating configurations, the HR-V is a capable, if slow, competitor for those who want an entry-level SUV.",
//       picture: "img/hrv.jpg"
//     },
//     {
//       model: "Subaru Crosstrek",
//       engine: "2.0-liter I-4 with 152 hp",
//       blurb: "The Crosstrek is Subaru’s smallest crossover. Based on the Impreza hatchback, the Crosstrek has a lower starting price than the Forester and Outback.",
//       picture: "img/crosstrek.jpg"
//     },
//     {
//       model: "Toyota CHR",
//       engine: "2.0-liter I-4 with 144 hp",
//       blurb: "The 2018 Toyota C-HR is the newest entry among subcompact crossovers, America’s fastest-growing segment. The C-HR puts an emphasis on style instead of practicality with its controversial exterior design.",
//       picture: "img/chr.jpg"
//     }