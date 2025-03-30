function findTheOldest(people) {
  const personaMasVieja = people.reduce((mayor, persona) => {
    const edadPersona = (persona.yearOfDeath || new Date().getFullYear()) - persona.yearOfBirth;
    const edadMayor = (mayor.yearOfDeath || new Date().getFullYear()) - mayor.yearOfBirth;

    return edadPersona > edadMayor ? persona : mayor;
  });

  console.log(personaMasVieja);
  return personaMasVieja;
}
