#define echoPin 2 // conectar pin D2 Arduino al pin Echo del HC-SR04
#define trigPin 3 //conectar pin D3 Arduino al pin Trig del HC-SR04

// defines variables
long duracion; // variable para la duracion del viaje de la onda de sonido
int distancia; // variable para la distancia obtenida

void setup() {
  pinMode(trigPin, OUTPUT); // configura el pin trig como salida
  pinMode(echoPin, INPUT); // configura el pin echo como entrada
  Serial.begin(9600); // la comunicacion serial entre la computadora y el arduino comienza en una velocidad de 9600 baud
  Serial.println("Test sensor ultrasonido"); // se imprime algo de texto a la terminal serial
  Serial.println("con un Arduino UNO R3");
}
void loop() {
  // ponemos la condicion inicial en el pin trig
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // ponemos el pin trig en voltaje alto por 10 microsegundos
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // leemos el pin echo, esto nos da el tiempo en microsegundos
  // que tardo viajar la onda de sonido desde el sensor a un objeto, el rebote, y de vuelta al sensor (viaje ida y vuelta)
  duracion = pulseIn(echoPin, HIGH);
  // Calculamos la distancia
  distancia = duracion * 0.034 / 2; // velocidad de una onda de sonido, dividido 2 (viaje ida y vuelta)
  // imprimimos la distancia obtenida en el monitor serial
  Serial.print("Distancia: ");
  Serial.print(distancia);
  Serial.println(" cm");
}