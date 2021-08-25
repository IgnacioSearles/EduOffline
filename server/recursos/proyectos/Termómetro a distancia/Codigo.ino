#include <Wire.h>
#include <Adafruit_MLX90614.h>
Adafruit_MLX90614 mlx = Adafruit_MLX90614();

#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH1106.h>
#define SCREEN_WIDTH 128 
#define SCREEN_HEIGHT 64

#define OLED_RESET -1
Adafruit_SH1106 display(OLED_RESET);

#define LED_TEMP_ALTA (7)

void setup()
{
    Serial.begin(9600);

    mlx.begin();

    display.begin(SH1106_SWITCHCAPVCC, 0x3C);

    pinMode(LED_TEMP_ALTA, OUTPUT);
}
void loop()
{
    float temperatura;
    float temperatura_ajustada;
    temperatura = mlx.readObjectTempC();
    temperatura_ajustada = (temperatura + 2.6);
    if (temperatura_ajustada >= 37.8)
    {
        digitalWrite(LED_TEMP_ALTA, HIGH);
    }
    else
    {
        digitalWrite(LED_TEMP_ALTA, LOW);
    }

    display.setTextSize(1);
    display.setTextColor(WHITE);
    display.setCursor(40, 10);
    display.print("Escaneado");
    display.setCursor(20, 30);
    display.setTextSize(3);
    display.print(temperatura_ajustada);
    display.display();
    display.clearDisplay();
    delay(500);
}