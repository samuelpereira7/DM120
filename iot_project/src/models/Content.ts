export default class Content {
    
    private temperatura: string = "0";
    private tempMax: string = "0";
    private tempMin: string = "0";
    private luminosidade: string = "0";
    private lumMax: string = "0";
    private lumMin: string = "0";
    private umidade: string = "0";
    private umidMax: string = "0";
    private umidMin: string = "0";
    private current_color: string = "0";
    private status_buzzer: string = "0";


	constructor($temperatura: string, $tempMax: string, $tempMin: string,
		        $luminosidade: string, $lumMax: string, $lumMin: string,
		        $umidade: string, $umidMax: string, $umidMin: string,
		        $current_color: string, $status_buzzer: string) {
        this.temperatura = $temperatura;
	    this.tempMax = $tempMax;
	    this.tempMin = $tempMin;
	
        this.luminosidade = $luminosidade;
	    this.lumMax = $lumMax;
	    this.lumMin = $lumMin;

        this.umidade = $umidade;
        this.umidMax = $umidMax;
        this.umidMin = $umidMin;

        this.current_color = $current_color;
        
        if($status_buzzer == "0") {
            this.status_buzzer = "OFF";
        } else
        {
            this.status_buzzer = "ON";
        }
	}

    /**
     * Getter $temperatura
     * @return {string }
     */
	public get $temperatura(): string  {
		return this.temperatura;
	}

    /**
     * Getter $tempMax
     * @return {string }
     */
	public get $tempMax(): string  {
		return this.tempMax;
	}

    /**
     * Getter $tempMin
     * @return {string }
     */
	public get $tempMin(): string  {
		return this.tempMin;
	}

    /**
     * Getter $luminosidade
     * @return {string }
     */
	public get $luminosidade(): string  {
		return this.luminosidade;
	}

    /**
     * Getter $lumMax
     * @return {string }
     */
	public get $lumMax(): string  {
		return this.lumMax;
	}

    /**
     * Getter $lumMin
     * @return {string }
     */
	public get $lumMin(): string  {
		return this.lumMin;
	}

    /**
     * Getter $umidade
     * @return {string }
     */
	public get $umidade(): string  {
		return this.umidade;
	}

    /**
     * Getter $umidMax
     * @return {string }
     */
	public get $umidMax(): string  {
		return this.umidMax;
	}

    /**
     * Getter $umidMin
     * @return {string }
     */
	public get $umidMin(): string  {
		return this.umidMin;
	}

    /**
     * Getter $current_color
     * @return {string }
     */
	public get $current_color(): string  {
		return this.current_color;
	}

    /**
     * Getter $status_buzzer
     * @return {string }
     */
	public get $status_buzzer(): string  {
		return this.status_buzzer;
	}

    /**
     * Setter $temperatura
     * @param {string } value
     */
	public set $temperatura(value: string ) {
		this.temperatura = value;
	}

    /**
     * Setter $tempMax
     * @param {string } value
     */
	public set $tempMax(value: string ) {
		this.tempMax = value;
	}

    /**
     * Setter $tempMin
     * @param {string } value
     */
	public set $tempMin(value: string ) {
		this.tempMin = value;
	}

    /**
     * Setter $luminosidade
     * @param {string } value
     */
	public set $luminosidade(value: string ) {
		this.luminosidade = value;
	}

    /**
     * Setter $lumMax
     * @param {string } value
     */
	public set $lumMax(value: string ) {
		this.lumMax = value;
	}

    /**
     * Setter $lumMin
     * @param {string } value
     */
	public set $lumMin(value: string ) {
		this.lumMin = value;
	}

    /**
     * Setter $umidade
     * @param {string } value
     */
	public set $umidade(value: string ) {
		this.umidade = value;
	}

    /**
     * Setter $umidMax
     * @param {string } value
     */
	public set $umidMax(value: string ) {
		this.umidMax = value;
	}

    /**
     * Setter $umidMin
     * @param {string } value
     */
	public set $umidMin(value: string ) {
		this.umidMin = value;
	}

    /**
     * Setter $current_color
     * @param {string } value
     */
	public set $current_color(value: string ) {
		this.current_color = value;
	}

    /**
     * Setter $status_buzzer
     * @param {string } value
     */
	public set $status_buzzer(value: string ) {
		this.status_buzzer = value;
	}
}
