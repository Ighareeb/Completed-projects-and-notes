let generate = () => {
    let quotes = {
        'Albert Camus': 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
        'Voltaire': 'It is difficult to free fools from the chains they revere.',
        'Bob Marley': 'None are more hopelessly enslaved than those who falsely believe they are free.'
}
let authors = Object.keys(quotes);

let author = authors[Math.floor(Math.random() * authors.length)];
let quote = quotes[author];

document.getElementById('quote').innerHTML = quote;
document.getElementById('author').innerHTML = author;


}